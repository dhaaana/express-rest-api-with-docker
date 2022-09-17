import { PrismaClient } from "@prisma/client";
import express from "express";
import config from "config";

const prisma = new PrismaClient();
const port = config.get<number>("port");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "halooo" });
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  if (users.length === 0) {
    res.json({ message: "no users" });
    return;
  }
  res.json();
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
