import express, {Request, Response, Application} from 'express';
import { Sequelize } from 'sequelize-typescript';
//import connection from './connection';
import sequelizeConnection from './db/config';
import { dbInit } from './db/init';



const app: Application = express();
const port = 3010;

//Body parsing

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to my API \n Endpoints are at http://localhost:${port}/api/v1`});
});

const start = async(): Promise<void> => {
    try {
        dbInit();
        app.listen(port, ()=>{
            console.log(`Server started on port ${port}`);
        });
    } catch(error) {
        console.error(error);
        process.exit(1);
    }
}

void start();