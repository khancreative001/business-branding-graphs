// Run: npm init -y && npm install express cors
// Then: node backend/server.js

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const configPath = path.join(__dirname, "..", "data", "config.json");

// Get project config
app.get("/api/config", (req, res) => {
  try {
    const raw = fs.readFileSync(configPath, "utf8");
    const config = JSON.parse(raw);
    res.json(config);
  } catch (err) {
    res.status(500).json({ error: "Unable to read config" });
  }
});

// Example endpoint to log orders
app.post("/api/order", (req, res) => {
  const { name, email, paymentReference } = req.body;
  console.log("New order:", { name, email, paymentReference });
  res.json({ status: "received" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
