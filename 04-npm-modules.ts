// I have not done anything to make this package work in Deno
import { generate } from "npm:hmac-auth-express@8.3.2";

const digest = generate(
  "secret",
  "sha256",
  Date.now().toString(),
  "POST",
  "/api/order",
  { foo: "bar" }
).digest("hex");

const hmac = `HMAC ${Date.now().toString()}:${digest}`;
console.log(`HMAC is ${hmac}`);
