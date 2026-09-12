const assert = require("assert");

async function testPaymentAPI() {
  const response = await fetch("http://localhost:3000/pay", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ amount: 100 })
  });

  const data = await response.json();

  assert.strictEqual(response.status, 200);
  assert.strictEqual(data.success, true);
  assert.strictEqual(data.amount, 100);

  console.log("✅ Payment test passed");
}

testPaymentAPI().catch((error) => {
  console.error("❌ Payment test failed");
  console.error(error);
  process.exit(1);
});