import express from "express"
import { IncomingHttpHeaders } from "http";

const router = express.Router();

router.get("/get", (req, res) => {
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
