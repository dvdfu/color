import "pixi.js";
import Stage from "../src/stage";

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: false,
  transparent: true,
  resolution: 2,
});

document.getElementById("i-1").appendChild(app.view);

let stage;

function setup() {
  stage = new Stage(app.stage);
  update();
}

function update() {
  requestAnimationFrame(update);
  stage.update();
}

PIXI.loader
  .add("assets/eye.png")
  .add("assets/slider_back.png")
  .load(setup);
