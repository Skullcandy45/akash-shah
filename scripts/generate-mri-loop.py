import os
import math
import numpy as np
from PIL import Image, ImageDraw
import imageio
import imageio_ffmpeg
import subprocess

def create_mri_loop():
    img_path = "public/assets/images/mri_diagnostic_center.jpg"
    base_img = Image.open(img_path).convert("RGB")
    orig_w, orig_h = base_img.size
    
    target_w, target_h = 1280, 720
    fps = 24
    duration_sec = 10
    total_frames = fps * duration_sec # 240 frames
    
    print(f"Generating MRI scan loop ({total_frames} frames, {duration_sec}s)...")
    frames = []
    
    for i in range(total_frames):
        phase = (i / total_frames) * 2 * math.pi
        
        # Subtle pan across the 3D anatomical pelvic screen
        zoom = 1.06 + 0.03 * math.sin(phase)
        pan_x = -0.04 + 0.03 * math.cos(phase)
        pan_y = 0.02 * math.sin(phase)
        
        crop_w = int(orig_w / zoom)
        crop_h = int(orig_h / zoom)
        
        center_x = int(orig_w * (0.48 + pan_x))
        center_y = int(orig_h * (0.50 + pan_y))
        
        x0 = max(0, min(orig_w - crop_w, center_x - crop_w // 2))
        y0 = max(0, min(orig_h - crop_h, center_y - crop_h // 2))
        
        cropped = base_img.crop((x0, y0, x0 + crop_w, y0 + crop_h))
        frame = cropped.resize((target_w, target_h), Image.Resampling.BILINEAR)
        
        # Telemetry overlay
        overlay = Image.new("RGBA", (target_w, target_h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(overlay)
        
        glow_alpha = int(40 + 20 * math.sin(phase * 2))
        bronze_color = (212, 149, 115, glow_alpha)
        
        # Grid scan line
        scan_y = int((target_h * 0.2) + (target_h * 0.6) * (0.5 + 0.5 * math.sin(phase)))
        draw.line([60, scan_y, target_w - 60, scan_y], fill=(212, 149, 115, int(glow_alpha * 0.8)), width=1)
        
        # Diagnostic HUD text
        draw.text((60, 40), "3T MULTIPARAMETRIC MRI // FUSION PLANNING", fill=(244, 241, 234, glow_alpha + 30))
        draw.text((60, 56), "COGNITIVE STAGING: PIRADS 4/5 IDENTIFIED", fill=(212, 149, 115, glow_alpha + 40))
        draw.text((target_w - 260, 40), "SLICE THICKNESS: 1.0mm AXIAL", fill=(244, 241, 234, glow_alpha + 20))
        draw.text((target_w - 260, 56), "VESICO-PROSTATIC MARGIN: PRESERVED", fill=(212, 149, 115, glow_alpha + 40))
        
        frame = Image.alpha_composite(frame.convert("RGBA"), overlay).convert("RGB")
        frames.append(np.array(frame))
        
    mp4_out = "public/assets/video/mri_diagnostics_loop.mp4"
    imageio.mimsave(
        mp4_out,
        frames,
        fps=fps,
        codec="libx264",
        format="FFMPEG",
        output_params=["-crf", "23", "-preset", "medium", "-pix_fmt", "yuv420p", "-movflags", "+faststart"]
    )
    print("MRI MP4 generated!")
    
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    webm_out = "public/assets/video/mri_diagnostics_loop.webm"
    cmd = [
        ffmpeg_exe, "-y", "-i", mp4_out,
        "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "32",
        "-an", webm_out
    ]
    subprocess.run(cmd, check=True)
    print("MRI WebM generated!")

if __name__ == "__main__":
    create_mri_loop()
