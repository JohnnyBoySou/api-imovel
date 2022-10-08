import express from "express";
import { connect } from 'mongoose';
import routes from "./routes.js";
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors)

try{
    connect(`mongodb+srv://joaodesousa101:223761dejoao@cluster0.ucfm4zm.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('connect')
}catch(e){
    console.log(e)

}
app.use(routes)

app.listen(5500, () => {
    console.log('server on')
    return "server on"
})