import express, { request, response } from "express"
import "express-async-errors"

const app = express();

app.get("/", (request, response) =>{
  response.send("Up and running! And everything is automated");
})


const port = 3000;
app.listen(port, () => {
 console.log(`[server]: Server is running at localhost:${port}`)
})

