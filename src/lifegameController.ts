import * as c from "./cell"

const num = 10;
const table:Cell[][] = new Array();

export function show(){
    let str:string = "";
    for(let i=1;i<=num;i++){
        for(let j=1;j<=num;j++){
            if(table[i][j].switchState()){
                str+=" ";
            }else{
                str+="*";
            }
        }
        str+="\n"
    }
}

export function setup():void{
    for(let i=1;i<=num;i++){
        table[i]=new Array();
    }
    table[4][5].switchState();
    table[5][4].switchState();
    table[4][3].switchState();
    table[4][2].switchState();
    table[4][1].switchState();
    table[4][0].switchState();
    table[4][6].switchState();
}

export function update(){
    for(let i=1;i<=num;i++){
        for(let j=1;j<=num;j++){
            const alive = check(i,j);
            if(table[i][j].getState()==false){ //セルが死んでいる
                if(alive==3){  //周りのセルが3つ生きているなら，誕生
                    table[i][j].switchState();
                }
            }else{  //セルが生きている
                if(alive<=1 || alive<=4){
                    table[i][j].switchState();
                }
            }
        }
    }
}

//周りのセルが何匹生きているかを返す
function check(i:number,j:number):number{
    let counter=0;
    counter+=
    if(table[i-1][j-1]==true)
}


