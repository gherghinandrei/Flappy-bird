class Pipe {
  constructor() {

    this.speed =  3;
    this.top = random(height * 4 / 5);
    this.bottom = height - this.top - spacing;
    this.x = width;
    this.w = 64;

  }

  show() {

    // fill(255);
    image(pipeSpriteTop, this.x, 0, this.w, this.top);
    // rect(this.x, 0, this.w, this.top);
    // fill(255);
    image(pipeSpriteBottom, this.x, height - this.bottom, this.w, this.bottom); 
    // rect(this.x, height - this.bottom, this.w, this.bottom); 
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
    let correction = bird.width / 2;

    if((bird.y < this.top || bird.y + correction >= height - this.bottom ) /*hit vertically */ && (rightEnd >= bird.x && bird.x + 16 > this.x)) { 
      return true;
    } else {
      return false;
    }
  }

  pass(){
    return bird.x == this.x && !this.hit();
  }

  
}