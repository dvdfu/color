import "pixi.js";
import Stage from "../src/stage";

const app = new PIXI.Application({
  width: 400,
  height: 300,
  transparent: false,
});

let stage;

function setup() {
  stage = new Stage(app);
  update();
}

function update() {
  requestAnimationFrame(update);
  stage.update();
}

document.getElementById("i-1").appendChild(app.view);

PIXI.loader.load(setup);
