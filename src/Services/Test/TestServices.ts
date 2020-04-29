import {Request, Response} from 'express';
import { ITestServicrs } from '../../Controllers/Test/TestController';

export default class TestServices implements ITestServicrs{


    getTest(req: Request): Record<string, any>{
        //return { data: {name: "arun", age: 26} }
        //return { code: 200, data: {name: "arun", age: 26} }
        return { code: 400, error: 'Test error', traceback:' Test trace back error' }
    }
}