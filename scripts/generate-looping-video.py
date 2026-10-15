import os
import math
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import imageio
import imageio_ffmpeg
import subprocess

def create_looping_video():
    os.makedirs("public/assets/video", exist_ok=True)
    
    img_path = "public/assets/images/robotic_surgery_theater.jpg"
    base_img = Image.open(img_path).convert("RGB")
    orig_w, orig_h = base_img.size
    
    # Target resolution: 1280x720 (720p HD, optimized for fast loading and crisp playback)
    target_w, target_h = 1280, 720
    fps = 24
    duration_sec = 11
    total_frames = fps * duration_sec # 264 frames
    
    print(f"Generating {total_frames} frames ({duration_sec}s at {fps}fps)...")
    
    frames = []
    
    # We want a seamless loop: parameter t goes 0 -> 2*pi
    for i in range(total_frames):
        phase = (i / total_frames) * 2 * math.pi
        
        # Subtle organic camera drift (sinusoidal so it loops perfectly back to start)
        zoom = 1.05 + 0.04 * math.sin(phase)
        pan_x = 0.03 * math.sin(phase)
        pan_y = 0.02 * (1.0 - math.cos(phase)) # smooth vertical glide
        
        # Crop window
        crop_w = int(orig_w / zoom)
        crop_h = int(orig_h / zoom)
        
        center_x = int(orig_w * (0.5 + pan_x))
        center_y = int(orig_h * (0.5 + pan_y))
        
        x0 = max(0, min(orig_w - crop_w, center_x - crop_w // 2))
        y0 = max(0, min(orig_h - crop_h, center_y - crop_h // 2))
        
        cropped = base_img.crop((x0, y0, x0 + crop_w, y0 + crop_h))
        frame = cropped.resize((target_w, target_h), Image.Resampling.BILINEAR)
        
        # Add subtle telemetry HUD overlay
        overlay = Image.new("RGBA", (target_w, target_h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(overlay)
        
        # Subtle crosshairs in center with light breathing glow
        glow_alpha = int(45 + 25 * math.sin(phase * 2))
        cx, cy = target_w // 2, target_h // 2
        
        # Precision reticle
        bronze_color = (212, 149, 115, glow_alpha)
        cyan_color = (200, 225, 220, int(glow_alpha * 0.7))
        
        draw.ellipse([cx - 40, cy - 40, cx + 40, cy + 40], outline=bronze_color, width=1)
        draw.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], outline=cyan_color, width=1)
        draw.line([cx - 60, cy, cx - 15, cy], fill=bronze_color, width=1)
        draw.line([cx + 15, cy, cx + 60, cy], fill=bronze_color, width=1)
        draw.line([cx, cy - 60, cx, cy - 15], fill=bronze_color, width=1)
        draw.line([cx, cy + 15, cx, cy + 60], fill=bronze_color, width=1)
        
        # Corner brackets
        pad = 40
        b_len = 24
        # Top-left
        draw.line([pad, pad, pad + b_len, pad], fill=bronze_color, width=2)
        draw.line([pad, pad, pad, pad + b_len], fill=bronze_color, width=2)
        # Top-right
        draw.line([target_w - pad - b_len, pad, target_w - pad, pad], fill=bronze_color, width=2)
        draw.line([target_w - pad, pad, target_w - pad, pad + b_len], fill=bronze_color, width=2)
        # Bottom-left
        draw.line([pad, target_h - pad - b_len, pad, target_h - pad], fill=bronze_color, width=2)
        draw.line([pad, target_h - pad, pad + b_len, target_h - pad], fill=bronze_color, width=2)
        # Bottom-right
        draw.line([target_w - pad - b_len, target_h - pad, target_w - pad, target_h - pad], fill=bronze_color, width=2)
        draw.line([target_w - pad, target_h - pad - b_len, target_w - pad, target_h - pad], fill=bronze_color, width=2)
        
        # Subtle telemetry text
        sec_current = (i / fps) % 60
        sub_mm = 0.08 + 0.02 * math.cos(phase * 3)
        draw.text((pad + 10, pad + 10), "CONSOLE: DA VINCI Xi // ACTIVE", fill=(244, 241, 234, glow_alpha + 30))
        draw.text((pad + 10, pad + 26), f"TRIANGULATION: {sub_mm:.2f}mm PRECISION", fill=(212, 149, 115, glow_alpha + 40))
        draw.text((target_w - pad - 180, pad + 10), "OPTICAL MAGNIFICATION: 10X", fill=(244, 241, 234, glow_alpha + 20))
        draw.text((target_w - pad - 180, pad + 26), "TREMOR FILTRATION: ENGAGED", fill=(212, 149, 115, glow_alpha + 40))
        
        # Blend overlay onto frame
        frame = Image.alpha_composite(frame.convert("RGBA"), overlay).convert("RGB")
        frames.append(np.array(frame))
    
    mp4_out = "public/assets/video/robotic_console_loop.mp4"
    print(f"Writing MP4 video to {mp4_out}...")
    imageio.mimsave(
        mp4_out,
        frames,
        fps=fps,
        codec="libx264",
        format="FFMPEG",
        output_params=["-crf", "22", "-preset", "medium", "-pix_fmt", "yuv420p", "-movflags", "+faststart"]
    )
    print("MP4 generated successfully!")
    
    # Also produce WebM format using ffmpeg executable
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    webm_out = "public/assets/video/robotic_console_loop.webm"
    print(f"Converting to WebM via {ffmpeg_exe}...")
    cmd = [
        ffmpeg_exe, "-y", "-i", mp4_out,
        "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "30",
        "-an", webm_out
    ]
    subprocess.run(cmd, check=True)
    print(f"WebM generated successfully: {webm_out}")

if __name__ == "__main__":
    create_looping_video()
