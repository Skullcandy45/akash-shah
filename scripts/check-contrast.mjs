/**
 * WCAG AA Contrast Verification Script
 * Validates contrast ratios between design system token pairs
 */

function hexToRgb(hex) {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

function relativeLuminance({ r, g, b }) {
  const sRGB = [r, g, b].map(val => {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
}

function contrastRatio(hex1, hex2) {
  const lum1 = relativeLuminance(hexToRgb(hex1));
  const lum2 = relativeLuminance(hexToRgb(hex2));
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

const tokens = {
  'cypress-950': '#071714',
  'cypress-900': '#0D2622',
  'cypress-800': '#163832',
  'alabaster-50': '#FCFBF7',
  'alabaster-100': '#F4F1EA',
  'alabaster-200': '#E5DFD3',
  'bronze-600': '#9A5B3E',
  'bronze-400': '#D49573',
  'slate-600': '#4A5553'
};

const checks = [
  { fg: 'cypress-950', bg: 'alabaster-50', minRatio: 4.5, context: 'Heading on light page bg' },
  { fg: 'cypress-900', bg: 'alabaster-50', minRatio: 4.5, context: 'Subheading on light page bg' },
  { fg: 'slate-600', bg: 'alabaster-50', minRatio: 4.5, context: 'Body text on light page bg' },
  { fg: 'slate-600', bg: 'alabaster-100', minRatio: 4.5, context: 'Body text on light card surface' },
  { fg: 'bronze-600', bg: 'alabaster-50', minRatio: 4.5, context: 'Primary warm accent on light bg' },
  { fg: 'bronze-600', bg: 'alabaster-100', minRatio: 4.5, context: 'Primary warm accent on light card' },
  { fg: 'alabaster-50', bg: 'bronze-600', minRatio: 4.5, context: 'White text on bronze CTA button' },
  { fg: 'alabaster-50', bg: 'cypress-950', minRatio: 4.5, context: 'Light text on dark hero / topbar' },
  { fg: 'alabaster-100', bg: 'cypress-950', minRatio: 4.5, context: 'Secondary text on dark hero / topbar' },
  { fg: 'alabaster-50', bg: 'cypress-900', minRatio: 4.5, context: 'Light text on dark cards & CTA banner' },
  { fg: 'bronze-400', bg: 'cypress-950', minRatio: 4.5, context: 'Warm accent on dark hero' },
  { fg: 'bronze-400', bg: 'cypress-900', minRatio: 4.5, context: 'Warm accent on dark card / CTA banner' },
  { fg: 'cypress-950', bg: 'alabaster-200', minRatio: 3.0, context: 'Border/UI component boundary contrast' }
];

console.log('-------------------------------------------------------------');
console.log(' WCAG AA Contrast Compliance Verification');
console.log(' Design System: Dr. Akash Shah Uro-Oncology & Robotic Surgery');
console.log('-------------------------------------------------------------\n');

let allPassed = true;

for (const check of checks) {
  const fgHex = tokens[check.fg];
  const bgHex = tokens[check.bg];
  const ratio = contrastRatio(fgHex, bgHex);
  const rounded = ratio.toFixed(2);
  const passed = ratio >= check.minRatio;
  
  if (!passed) allPassed = false;

  const status = passed ? '✅ PASS' : '❌ FAIL';
  console.log(`${status} [${rounded}:1 >= ${check.minRatio}:1] ${check.fg} (${fgHex}) on ${check.bg} (${bgHex}) — ${check.context}`);
}

console.log('\n-------------------------------------------------------------');
if (allPassed) {
  console.log('✨ ALL DESIGN TOKEN PAIRS COMPLY WITH WCAG AA STANDARDS.');
  console.log('-------------------------------------------------------------\n');
  process.exit(0);
} else {
  console.error('⚠️  SOME TOKEN PAIRS FAILED WCAG AA STANDARDS.');
  console.log('-------------------------------------------------------------\n');
  process.exit(1);
}
