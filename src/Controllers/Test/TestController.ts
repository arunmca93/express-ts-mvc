import Express from '../Express';
import { Request, Response } from 'express';

export interface ITestServicrs{
    getTest(req: Request): Record<string, any>;
}

export default class TestController extends Express{

    private path = '/test'
    public TestServices: ITestServicrs
    constructor(testServices: ITestServicrs){
        super();
        this.mapRoutes();
        this.TestServices = testServices;
    }

    public response = (res: Response, data: Record<string, any>): any =>{

        if(data.code===200)
            this.resSuccess( res , data);
        
        if(data.code===400)
            this.resError( res , data);

    }
    protected mapRoutes(){
        this.router.get(`${this.path}/my`, this.getTest);
        this.router.get(`${this.path}/my1`, this.getTest1);
    }

    public getTest = (req: Request, res: Response): any =>{
        const result:any = this.TestServices.getTest(req);
        return this.response(res, result);
    }

    public getTest1 = (req: Request, res: Response): any =>{
        console.log('Test')
        return res.status(200).json({name: "arun"});
    }
}