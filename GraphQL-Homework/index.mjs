import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
import { resolvers, schema } from "./schema.mjs";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  return res.end(
    ruruHTML({
      endpoint: "/graphql",
    })
  );
});

app.use("/graphql", createHandler({ schema: schema, rootValue: resolvers }));

app.listen(3000, () =>
  console.log("Server is running on: http://localhost:3000")
);
