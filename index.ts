import express, {Request, Response} from 'express';
import { Sequelize } from 'sequelize-typescript';
import connection from './connection';

const app = express();

app.get('/', (req: Request, res: Response): Response => {
    return res.send('Hello World');
});

const start = async(): Promise<void> => {
    try {
        connection.sync();
        app.listen(3010, ()=>{
            console.log("Server started on port 3010");
        });
    } catch(error) {
        console.error(error);
        process.exit(1);
    }
}

void start();