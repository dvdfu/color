import Slider from "rc-slider";
import ColorSwatch from "./ColorSwatch.jsx";
const React = require("react");

import "rc-slider/assets/index.css";

const GAMMA = 0.8;
const MAX_INTENSITY = 255;

class VisualSpectrumSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wavelength: 500, rgb: this.visibleSpectrumToRGB(500) };
  }

  correctGamma(color, factor) {
    if (color == 0) return 0;
    return Math.round(MAX_INTENSITY * Math.pow(color * factor, GAMMA));
  }

  wavelengthToRgb(nm) {
    var r, g, b;

    if (nm < 380 || nm > 780) {
      r = 0;
      g = 0;
      b = 0;
    } else if (nm < 440) {
      r = -(nm - 440) / (440 - 380);
      g = 0;
      b = 1;
    } else if (nm < 490) {
      r = 0;
      g = (nm - 440) / (490 - 440);
      b = 1;
    } else if (nm < 510) {
      r = 0;
      g = 1;
      b = -(nm - 510) / (510 - 490);
    } else if (nm < 580) {
      r = (nm - 510) / (580 - 510);
      g = 1;
      b = 0;
    } else if (nm < 645) {
      r = 1;
      g = -(nm - 645) / (645 - 580);
      b = 0;
    } else {
      r = 1;
      g = 0;
      b = 0;
    }

    var factor;

    if (nm < 420) {
      factor = 0.3 + 0.7 * (nm - 380) / (420 - 380);
    } else if (nm < 701) {
      factor = 1;
    } else {
      factor = 0.3 + 0.7 * (780 - nm) / (780 - 700);
    }

    return {
      r: this.correctGamma(r, factor),
      g: this.correctGamma(g, factor),
      b: this.correctGamma(b, factor),
    };
  }

  onSliderChange(value) {
    this.setState({
      wavelength: value,
    });
  }

<<<<<<< HEAD
  rgbStyle(){
    return { background: "rgb(" + this.state.rgb + ")"};
=======
  rgbStyle() {
    return { color: "rgb(" + this.state.rgb + ")" };
>>>>>>> 757f6231b5135905caf0a57da125d1f0a21c24ca
  }

  render() {
    const color = this.wavelengthToRgb(this.state.wavelength);

    return (
      <div className="slider">
        <ColorSwatch r={color.r} g={color.g} b={color.b} />
        <Slider
<<<<<<< HEAD
          min={380}
          max={700}
=======
          min={300}
          max={800}
>>>>>>> 757f6231b5135905caf0a57da125d1f0a21c24ca
          defaultValue={this.state.wavelength}
          onChange={this.onSliderChange.bind(this)}
          trackStyle={{
            height: 10,
          }}
          handleStyle={{
            height: 28,
            width: 28,
            marginLeft: -14,
            marginTop: -9,
          }}
          railStyle={{
            height: 10,
          }}
          tipFormatter={x => x}
        />
      </div>
    );
  }
}

export default VisualSpectrumSlider;
