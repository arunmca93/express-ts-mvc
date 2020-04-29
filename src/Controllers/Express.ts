import { Response, Router } from 'express';
export default abstract class Express {

    public router = Router();
    constructor(){

    }

    protected abstract mapRoutes(): void;

    public resSuccess = (res:Response, resData: Record<string,any>):any =>{

        res.status(200).json(
            {
                success: true,
                traceback:'',
                error:'',
                data: resData.data
            }
        );

    }

    public resError = (res:Response, resData: Record<string,any>):any =>{

        res.status(400).json(
            {
                success: false,
                error: resData.error,
                traceback: resData.traceback,
                data:[]
            }
        );

    }
    
    public response = (res:Response, resData: Record<string,any>):any =>{

        console.log(resData.code)
        if(resData.code===200){
            res.status(200).json(
                {
                    success: true,
                    traceback:'',
                    error:'',
                    data: resData.data
                }
            );
        }

        if(resData.code===400){
            res.status(400).json(
                {
                    success: false,
                    error: resData.error,
                    traceback: resData.traceback,
                    data:[]
                }
            );
        }

        if(resData.code === null || resData.code === undefined){
            res.status(204).json(
                {
                    success: false,
                    error: 'Un-Handled response!',
                    traceback: '',
                    data:[]
                }
            );
        }
        
    }
    
}