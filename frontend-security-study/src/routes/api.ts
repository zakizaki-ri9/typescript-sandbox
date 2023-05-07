import express from "express"
import { IncomingHttpHeaders } from "http";

const router = express.Router();

const ALLOW_LIST = ["http://localhost:3000", "http://site.example:3000"];

router.use((req, res, next) => {
  // すべてのオリジンからのアクセスを許容する
  // res.header("Access-Control-Allow-Origin", "*");

  // http://localhost:3000 からのアクセスは許容するが http://site.example:3000 からのアクセスは許容できない
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  // Originヘッダが存在している、かつリクエスト許可するリスト内にOriginヘッダの値が含まれているかチェック
  if (req.headers.origin && ALLOW_LIST.includes(req.headers.origin)) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
  }
  // プリフライトリクエスト時送信可能なヘッダーを設定
  // ex. await fetch("http://site.example:3000/api", { headers: { "X-Token": "test" }});
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Headers", "X-Token");
  }
  next();
})

router.get("/", (req, res) => {
  res.setHeader("X-Timestamp", Date.now())

  if (req.query.message === "") {
    res.status(400);
  }
  res.send({
    message: generateMessage(req.query.message, req.headers["x-lang"]),
  });
})

const generateMessage = (
  queryMessage: qs.ParsedQs[string],
  lang: IncomingHttpHeaders[string]
) => {
  if (queryMessage !== "") {
    return queryMessage;
  }

  if (lang === "en") {
    return "message is empty.";
  }
  return "message の値が空です。";
};

export {
  router
};
