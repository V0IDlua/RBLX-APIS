import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/", async (req, res) => {
  try {
    const r = await fetch(
      "https://gist.githubusercontent.com/V0IDlua/7f68d76a32de31dc450f312e95430dc1/raw/03e640d0e2be4c1183d6cbd32e8e9c588a59a233/announce.json",
      { cache: "no-store" }
    );

    const text = await r.text();

    res.set("Content-Type", "text/plain; charset=utf-8");
    res.set("Cache-Control", "no-store");
    res.send(text);
  } catch (err) {
    res.status(500).send("Failed to fetch announce.json");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
