class Floor{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.visible=false
    }
    display(){
        stroke("green")
        rectMode(CENTER)
        var box1=createSprite(this.x,this.y,this.w,this.h);
        
        box1.visible=false;
        
        //rect(this.x,this.y,this.w,this.h) 
    }
}