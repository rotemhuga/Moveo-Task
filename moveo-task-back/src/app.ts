import express from 'express';
import { connectToDB } from '../src/connections';

const app = express();
app.get("/", function (req, res) {
   res.send("Hello World");
});

connectToDB();
app.listen(3001, () => console.log("Listening..."));