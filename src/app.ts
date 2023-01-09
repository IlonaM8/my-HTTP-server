import express, { request, response } from "express"
import "express-async-errors"

const app = express();

app.get("/", (request, response) =>{
  response.send("Up and running! And everything is automated");
})

export default app;
