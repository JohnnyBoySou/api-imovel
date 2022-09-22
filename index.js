import express from "express";
import { connect } from 'mongoose';
import routes from "./routes.js";

const app = express()

connect(`mongodb+srv://joaodesousa101:223761dejoao@cluster0.ucfm4zm.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

app.use(express.json());
app.use(routes)

app.listen(5500, () => {
    console.log('server on')
    return "server on"
})