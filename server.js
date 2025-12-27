import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/", async (req, res) => {
  try {
    // Cache-buster that changes once per second
    const cacheBuster = Math.floor(Date.now() / 1000);

    const url =
      "https://gist.githubusercontent.com/V0IDlua/7f68d76a32de31dc450f312e95430dc1/raw/announce.json" +
      "?cb=" + cacheBuster;

    const response = await fetch(url, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache"
      }
    });

    const text = await response.text();

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    res.setHeader("Pragma", "no-cache");

    res.send(text);
  } catch (err) {
    res.status(500).send("ERROR: Failed to fetch latest announce.json");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Raw text server running on port", PORT);
});