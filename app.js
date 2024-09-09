import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.json({ msg: "First docker app" });
});
app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
