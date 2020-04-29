import express, { Application, Request, Response, NextFunction } from 'express';
import { Controllers } from './Common/ServiceFactory';
import { db, query } from '../db/db';

const app:Application = express();

app.get('/', async (req: Request, res: Response, next: NextFunction)=>{

    db.query('insert into test(id,name, age) values(2, "test", 30)')
    console.log(await query('select * from test'));
    
    console.log(10);
    res.json(10)
});

Controllers.forEach((controller: any) => {
    app.use('/api', controller.router)
})
//console.log(controllers);

app.listen(3000, ()=> console.log('Running on 3000'));

export { app };