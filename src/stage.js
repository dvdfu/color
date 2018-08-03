import "pixi.js";
import VisibleSpectrum from "../src/visibleSpectrum";

class Stage {
  constructor(parent) {
    this.value = 0;

    let sprite = new PIXI.Sprite(
      PIXI.loader.resources["assets/eye.png"].texture,
    );
    parent.addChild(sprite);

    let visibleSpectrum = new VisibleSpectrum(parent);
  }

  update() {}

  setValue(value) {
    if (value < 0) {
      this.value = 0;
    } else if (value > 1) {
      this.value = 1;
    } else {
      this.value = value;
    }
  }

  getWavelength() {
    return 390 + (700 - 390) * this.value;
  }
}

export default Stage;
