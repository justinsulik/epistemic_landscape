
////
// Map
////

// x,y dimensions (in pixels)
var map_width = 600;
var map_length = 600;

// scaling factor
var scl = 15;
// x,y dimensions (in grid blocks)
var cols = Math.floor(map_width/scl);
var rows = Math.floor(map_length/scl);

// vars for landscape shaping
var max_alt = 1000;
var roughness = 0;
var smoothing = 0.1;
var peak = 0;
var terrain;

////
// Agents
////
var max_speed = 0.2;
var agent_size = 10;
var agent_count = 4;
var agents = [];
