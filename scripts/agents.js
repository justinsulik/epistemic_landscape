
class Agent {

  constructor(){
    this.location = createVector(Math.random()*map_width, Math.random()*map_length);
    this.velocity = createVector(max_speed*Math.random()-0.5*max_speed, max_speed*Math.random()-0.5*max_speed);
    this.size = agent_size;
    this.dig_speed = 1;
  }

  show(){
    push();
      translate(this.location.x, this.location.y, this.get_height());
      stroke(255, 0, 0);
      fill(255, 0, 0);
      ellipsoid(this.size,this.size,this.size, 5, 5);
    pop();
  }

  check_in_bounds(){
    if(this.location.x>=map_width-this.size-scl){
      this.velocity.x = -1*max_speed*Math.random();
    }
    if(this.location.x<=0){
      this.velocity.x = max_speed*Math.random();
    }
    if(this.location.y>=map_length-this.size-scl){
      this.velocity.y = -1*max_speed*Math.random();
    }
    if(this.location.y<=0){
      this.velocity.y = max_speed*Math.random();
    }
  }

  move(){
    this.check_in_bounds();
    this.location.x += this.velocity.x;
    this.location.y += this.velocity.y;
  }

  get_height(){
    var grid_x = Math.floor(this.location.x/scl);
    var grid_y = Math.floor(this.location.y/scl);
    var height;
    try {
      height = terrain[grid_x][grid_y];
    }
    catch(err) {
      height = 0;
    }
    finally {
      return(height);
    }
  }

  excavate(){
    var grid_x = Math.floor(this.location.x/scl);
    var grid_y = Math.floor(this.location.y/scl);
    try {
      if(terrain[grid_x][grid_y]- this.dig_speed>0){
        terrain[grid_x][grid_y] -= this.dig_speed;
      }
    }
    catch(err){

    }
  }
}
