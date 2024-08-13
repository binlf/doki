import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Doki Doki!");
});

export default app;
