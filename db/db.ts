import { Sequelize, QueryTypes } from 'sequelize';

const db:Sequelize = new Sequelize('mvcdemo', 'root', '', {
    dialect:'mysql',
    host: 'localhost'
});

//db.query('select * from test', )

const query = async (qry: string) =>{
    return await db.query(qry, { type: QueryTypes.SELECT });
}


export { db, query }