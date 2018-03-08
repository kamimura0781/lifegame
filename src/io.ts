import * as fs from "fs";

export function readFile(fileName:string):string{
    return fs.readFileSync("../"+fileName,'utf-8');
}

export function writeFile(fileName:string, file:any):void{
    fs.writeFileSync("../"+fileName,file,'utf-8');
}
