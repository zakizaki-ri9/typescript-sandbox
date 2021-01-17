import * as jp from "jp-prefecture"
console.log({
  getAllResult: jp.getAll("pref", ["id", "name"])
})
