import express from "express";
import proxyActor from "./routes/proxyActor.js"

const app = express();

// routes
app.use(proxyActor);

app.listen(
    8080,
    () => {
        console.log("Server is up");
    }
)