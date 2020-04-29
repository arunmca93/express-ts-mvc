import TestController, { ITestServicrs } from './../Controllers/Test/TestController';
import TestServices from './../Services/Test/TestServices';

const testServices: ITestServicrs = new TestServices();


export const Controllers: any = [new TestController(testServices)];