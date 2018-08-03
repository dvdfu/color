import "pixi.js";

class Stage {
  constructor(stage) {
    let sprite = new PIXI.Sprite(
      PIXI.loader.resources["assets/eye.png"].texture,
    );
    stage.addChild(sprite);
  }

  update() {}
}

export default Stage;
