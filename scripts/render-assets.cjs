const fs = require('node:fs');
const path = require('node:path');
const { Resvg } = require('@resvg/resvg-js');

const root = path.resolve(__dirname, '..');
const fontDir = path.join(process.env.WINDIR || 'C:/Windows', 'Fonts');
const fonts = ['segoeui.ttf', 'segoeuib.ttf', 'consola.ttf']
  .map(file => path.join(fontDir, file))
  .filter(file => fs.existsSync(file));

if (fonts.length !== 3) {
  throw new Error('The source artwork uses Segoe UI, Segoe UI Bold and Consolas. Install those fonts or deliberately update the SVG font families before rendering.');
}

for (const folder of ['hero', 'projects']) {
  const directory = path.join(root, 'assets', folder);
  for (const file of fs.readdirSync(directory).filter(file => file.endsWith('.svg')).sort()) {
    const svg = fs.readFileSync(path.join(directory, file), 'utf8');
    const renderer = new Resvg(svg, {
      font: { loadSystemFonts: false, fontFiles: fonts, defaultFontFamily: 'Segoe UI' }
    });
    const png = renderer.render().asPng();
    const output = path.join(directory, file.replace(/\.svg$/, '.png'));
    fs.writeFileSync(output, png);
    console.log(`${path.relative(root, output)}: ${(png.length / 1024).toFixed(1)} KiB`);
  }
}
