ssweb

Simple and powerful website screenshot utility powered by Puppeteer.

Features

- 📸 Full Page Screenshot
- 📱 Mobile Screenshot
- 🖥️ Desktop Screenshot
- 💾 Save To File
- 🔤 Base64 Output
- 📦 Buffer Output
- 🚀 Node.js 18+
- ⚡ Easy To Use
- 🖥️ VPS Ready
- ⚙️ Pterodactyl Ready
- ☁️ Railway Ready
- ☁️ Render Ready
- ▲ Vercel Compatible

Installation

npm install ssweb

Usage

Capture Screenshot

const ssweb = require("ssweb");

(async () => {
    const result = await ssweb.capture(
        "https://google.com"
    );

    console.log(result);
})();

Save Screenshot

const ssweb = require("ssweb");

(async () => {
    await ssweb.save(
        "https://google.com",
        "google.png"
    );

    console.log("Saved!");
})();

Mobile Screenshot

const ssweb = require("ssweb");

(async () => {
    const result = await ssweb.mobile(
        "https://google.com"
    );

    console.log(result);
})();

Desktop Screenshot

const ssweb = require("ssweb");

(async () => {
    const result = await ssweb.desktop(
        "https://google.com"
    );

    console.log(result);
})();

Base64 Output

const ssweb = require("ssweb");

(async () => {
    const base64 = await ssweb.base64(
        "https://google.com"
    );

    console.log(base64);
})();

Buffer Output

const ssweb = require("ssweb");

(async () => {
    const buffer = await ssweb.buffer(
        "https://google.com"
    );

    require("fs").writeFileSync(
        "hasil.png",
        buffer
    );
})();

Methods

capture(url, options)

Capture a website screenshot.

save(url, filename)

Save screenshot directly to a file.

mobile(url)

Capture using a mobile viewport.

desktop(url)

Capture using a desktop viewport.

base64(url)

Return screenshot as Base64 string.

buffer(url)

Return screenshot as Buffer.

Example Response

{
  success: true,
  url: "https://google.com",
  timestamp: 1748510000000,
  width: 1366,
  height: 768,
  buffer: <Buffer ...>,
  base64: "iVBORw0KGgoAAA..."
}

Author

Muhammad Farel

GitHub: https://github.com/rayyzneverlus

License

MIT
