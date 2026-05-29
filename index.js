const fs = require("fs");

async function getBrowser() {
    const isServerless =
        process.env.VERCEL ||
        process.env.AWS_LAMBDA_FUNCTION_NAME;

    if (isServerless) {
        const chromium = require("@sparticuz/chromium");
        const puppeteer = require("puppeteer-core");

        return puppeteer.launch({
            args: chromium.args,
            executablePath: await chromium.executablePath(),
            headless: true
        });
    }

    const puppeteer = require("puppeteer");

    return puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage"
        ]
    });
}

class SSWeb {
    async capture(url, options = {}) {
        if (!url) {
            throw new Error("URL is required");
        }

        const browser = await getBrowser();

        try {
            const page = await browser.newPage();

            await page.setViewport({
                width: options.width || 1366,
                height: options.height || 768
            });

            await page.goto(url, {
                waitUntil: "networkidle2",
                timeout: options.timeout || 60000
            });

            const buffer = await page.screenshot({
                type: options.type || "png",
                fullPage: options.fullPage ?? true
            });

            return {
                success: true,
                url,
                timestamp: Date.now(),
                width: options.width || 1366,
                height: options.height || 768,
                buffer,
                base64: buffer.toString("base64")
            };
        } finally {
            await browser.close();
        }
    }

    async save(url, filename = "screenshot.png", options = {}) {
        const result = await this.capture(url, options);

        fs.writeFileSync(
            filename,
            result.buffer
        );

        return {
            success: true,
            file: filename,
            url
        };
    }

    async mobile(url) {
        return this.capture(url, {
            width: 390,
            height: 844,
            fullPage: true
        });
    }

    async desktop(url) {
        return this.capture(url, {
            width: 1920,
            height: 1080,
            fullPage: true
        });
    }

    async base64(url) {
        const result = await this.capture(url);
        return result.base64;
    }

    async buffer(url) {
        const result = await this.capture(url);
        return result.buffer;
    }
}

module.exports = new SSWeb();
