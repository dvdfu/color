import "pixi.js";

class VisibleSpectrum {
  constructor(parent) {
    let sprite = new PIXI.Sprite(
      PIXI.loader.resources["assets/slider_back.png"].texture,
    );
    parent.addChild(sprite);
  }

  update() {}
}

export default VisibleSpectrum;
