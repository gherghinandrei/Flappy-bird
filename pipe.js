class Pipe {
  constructor() {

    this.speed =  3;
    this.top = random(height * 4 / 5);
    this.bottom = height - this.top - spacing;
    this.x = width;
    this.w = 64;

  }

  show() {

    fill(255);
    rect(this.x, 0, this.w, this.top);
    fill(255);
    rect(this.x, height - this.bottom, this.w, this.bottom); 
  } 


  update() {
    this.x -= this.speed;
  }  


  offscreen() {
    return (this.x < -this.w);
  }


  hit(){
    // return (bird.x == this.x); 
    //this.x = capatul din dreapta
    var rightEnd = this.x + this.w; 
    let halfBirdHeight = bird.height / 2;
    let halfBirdwidth = bird.width / 2;

    if(
      (bird.y - halfBirdHeight < this.top || bird.y + halfBirdwidth >= height - this.bottom) //hit vertically 
       && (rightEnd >= bird.x && bird.x > this.x ) 
       ){ 

        console.log("hit");
        //bird.x = 64
        //pipes.x capatul din stanga
        //pipes.x + pipes.w = 96 => capatul din dreapta

      return true;
    } else {
      return false;
    }
  }

  pass(){
    return bird.x == this.x && !this.hit();
  }

  
}