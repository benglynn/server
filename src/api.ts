import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("OK Computer");
});

app.listen(8080, () => {
  console.log("Listening on 8080");
});
