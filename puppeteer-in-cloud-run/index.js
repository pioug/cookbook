"use strict";

const { json, send } = require("micro");
const puppeteer = require("puppeteer-core");
const userAgent = require("user-agents");

module.exports = handler;

async function handler(req, res) {
  const { url } = await json(req);
  const actualUrl = await runPuppeteer(url);
  return send(res, 200, actualUrl);
}

async function runPuppeteer(url) {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    executablePath: "/usr/bin/chromium-browser",
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  page.on("dialog", async (dialog) => {
    await dialog.dismiss();
  });
  await page.setUserAgent(userAgent.toString());
  await page.goto(link, { waitUntil: "networkidle2" });
  const actualUrl = page.url();
  await browser.close();
  return actualUrl;
}
