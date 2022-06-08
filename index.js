import express from "express";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json("Сервер работает!");
});

app.get("/", (req, res) => {
    res.status(200).json("POSTGRE + NODEJS");
})

app.listen(PORT, () => {
  console.log(`App start on port: ${PORT}`);
});
