import express from "express"
import "express-async-errors"

const app = express();

app.get("/planets", (request, response) =>{
  response.json([
    { name: "Pluto" },
    { name: "Venus" },
    { name: "Saturn" },
    { name: "Jupiter" },
]);
})

export default app;
