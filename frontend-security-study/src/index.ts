import express, { Application } from "express";
import {router} from "@/routes/api"
const app: Application = express();
const port = 3000;

app.use("/api", router);
app.use(express.static("public"))

app.get("/", (_req, res, _next) => {
  res.end("Top page")
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
