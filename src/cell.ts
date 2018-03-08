class Cell{
    private state = false;
    
    public getState(){
        return this.state;
    }
    
    
    public switchState(){
        if(this.state == true){
            this.state = false;
        }else{
            this.state = true;
        }
    }
}