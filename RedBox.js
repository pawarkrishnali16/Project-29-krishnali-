class RedBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(255,190,196);
        super.display();
    }
}