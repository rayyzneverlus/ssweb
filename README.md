SSWEB

Simple and powerful website screenshot utility powered by Puppeteer.

Features

- 📸 Full page screenshot
- 📱 Mobile screenshot
- 🖥️ Desktop screenshot
- 💾 Save screenshot to file
- 🔤 Base64 output
- 📦 Buffer output
- 🚀 Node.js 18+
- ⚡ Easy to use
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

await ssweb.capture(
    "https://google.com"
);

save(url, filename)

Save screenshot directly to a file.

await ssweb.save(
    "https://google.com",
    "google.png"
);

mobile(url)

Capture using a mobile viewport.

await ssweb.mobile(
    "https://google.com"
);

desktop(url)

Capture using a desktop viewport.

await ssweb.desktop(
    "https://google.com"
);

base64(url)

Return screenshot as Base64 string.

await ssweb.base64(
    "https://google.com"
);

buffer(url)

Return screenshot as Buffer.

await ssweb.buffer(
    "https://google.com"
);

Author

Muhammad Farel

GitHub: https://github.com/rayyzneverlus

License

MIT
