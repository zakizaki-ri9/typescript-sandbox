import express, {Application} from "express";
const app: Application = express();
const port = 3000;

app.get("/", (_req, res, _next) => {
  res.end("Top page")
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
