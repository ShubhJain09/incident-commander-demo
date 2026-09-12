const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Payment API is running",
    status: "healthy"
  });
});

app.post("/pay", (req, res) => {
  const { amount } = req.body;

  // BUG: deployment accidentally changed the amount calculation
  const paymentAmount = amount * undefined;

  if (!amount || amount <= 0) {
    return res.status(400).json({
      error: "Invalid payment amount"
    });
  }

  res.json({
    success: true,
    message: "Payment processed",
    amount: paymentAmount
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Payment API running at http://localhost:${PORT}`);
});