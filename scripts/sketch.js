console.log("Loading sketch...");

function setup() {
  createCanvas(map_width, map_length, WEBGL);
  terrain = createTerrain(cols, rows, roughness);
  // createHill(5000, 100, 200, 30, 30, terrain);
  for(var i = 0; i < agent_count; i++){
    agents.push(new Agent());
  }
}

function draw() {
  background(150);
  stroke(200);
  rotateX(PI/3);
  translate(-map_width/2, -0.8*map_length, -100);

  for (var y = 0; y < rows-1; y++){
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++){
      var z = terrain[x][y];
      vertex(x*scl, y*scl, z);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();

    agents.forEach(function(agent){
      agent.move();
      agent.show();
      // agent.excavate();
    });
  }
}
