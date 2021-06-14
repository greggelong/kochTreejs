let output
let checkbox;

function setup(){
    createCanvas(800,600)
    background(50)
    output = createP("output")
    checkbox = createCheckbox('scroll them', false);

    stroke(255)
    //angleMode(DEGREES)
    //translate(0,300)  // make this the origin
    depth = 5
    //caculate lenth so it fits on the canvas depth 5 is 10 pixles
    ruleLenght = 10*(3**(5-depth)) 
    //koch(depth,ruleLenght)  //koch(depth of recursion, len of first rule

}
    
function draw(){
    background(50);
    line(0,300,width,300)
    // push matrix for koch curve
    // koch curve
    push()
    if (checkbox.checked()){
      translate(width-((frameCount/2)%(width*2)),300)  // make this the origin
    }
    else{
      translate(0,300)
    }
  
    let depth = int(map(mouseX,0,width,0,6,true))
    print("depth "+str(depth))
    output.html("depth "+str(depth))
    //depth = 5
    //caculate lenth so it fits on the canvas depth 5 is 10 pixles
    ruleLenght = 10*(3**(5-depth)) 
    koch(depth,ruleLenght)
    
    pop()
    // push matrix for tree
    // tree 
    push() 
    if (checkbox.checked()){
      translate(frameCount%width,500)
    }
    else{
      translate(500,500)
    } 
    branch(100) 
    pop()
}
        
function rule(ln){
    ln /=3
    // draw rule
    line(0,0,ln,0)
    translate(ln,0)
    rotate(radians(-60))
    line(0,0,ln,0)
    translate(ln,0)
    rotate(radians(120))
    line(0,0,ln,0)
    translate(ln,0)
    rotate(radians(-60))
    line(0,0,ln,0)
}
   
function koch(order, ln){
    if (order == 0){
      line(0,0,width,0)
    }
    else if(order == 1){
        rule(ln)
    }
    else{
        order -= 1
        koch(order,ln)
        pos = ln
        
        pos =ln *0.3333
        translate(pos,0)
        rotate(radians(-60))
        koch(order,ln)
        pos =ln *0.3333
        translate(pos,0)
        rotate(radians(120))
        koch(order,ln)
        pos =ln *0.3333
        translate(pos,0)
        rotate(radians(-60))
        koch(order,ln)
    }
}



function branch(ln){
    
    
    let angle = map(mouseX,0,width,0,TWO_PI)  
    let srnk = 0.67
    line(0, 0,0,-ln) // main branch
    //rect(0,0,5,-ln)
    noFill()
    //ellipse(0,-ln,ln,ln)
    
    if (ln > 4 ){
        translate(0,-ln) // go to the end of the line
        push()
        rotate(angle)    //rotate to right
        branch(ln*srnk)  //call branch agian
        pop()
        push()
        rotate(-angle)
        branch(ln*srnk)
        pop()
        
    }
  
}