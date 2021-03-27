class Snake{

    constructor() {

       this.body=[]
       this.body[0]=createVector(W/2,H/2)
       this.XDir=0
       this.YDir=0
       this.len=0

    }
    setDirection(x,y){

        this.XDir=x
        this.YDir=y

    }
    update(){

        var head=this.body[this.body.length-1].copy()
        this.body.shift()
        head.x+=this.XDir
        head.y+=this.YDir
        this.body.push(head)

    }
    grow(){

        var head=this.body[this.body.length-1].copy()
        this.len++
        this.body.push(head)
    }
    eat(pos){

        var x=this.body[this.body.length-1].x
        var y=this.body[this.body.length-1].y
        if (x===pos.x&&y===pos.y){

            this.grow()
            return true

        }
        return false

    }
    show() {
        rect(this.body[0].x,this.body[0].y,13,13)
        for(var i=0;i<this.bodylength;i++){
            noStroke()

            fill (0)
            rect(this.body[i].x,this.body[i].y,13,13)
        }
    }
    endGame(){

        var x=this.body[this.body.length-1].x
        var y=this.body[this.body.length-1].y

        if(x>W-1 || x<0 || y>H-1 || y<0){

            return true
        }
        for(var i=0;i<this.bodylength-1;i++){

        var part= this.body[i]
        if(part.x==x && part.y==y){
            
            return true
        }
        }
     

        return false
    }
}