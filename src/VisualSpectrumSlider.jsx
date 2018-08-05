import Slider from 'rc-slider';
const React = require("react");

import 'rc-slider/assets/index.css';

class VisualSpectrumSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wavelength: 400};
  }

  adjust(colour, factor){
    const gamma = 0.8;
    const intensityMax = 255;

    if (colour == 0) {
      return 0;
    } else {
      return Math.round(intensityMax * Math.pow(colour * factor, gamma));
    }
  }

  visibleSpectrumToRGB(nm) {
    var red, green, blue;

    if (nm < 380 || nm > 780) {
      throw "Out of range";
    } else if (nm < 440) {
      red = -(nm - 440) / (440 - 380);
      green = 0;
      blue = 1;
    } else if (nm < 490) {
      red = 0;
      green = (nm - 440) / (490 - 440);
      blue = 1;
    } else if (nm < 510) {
      red = 0;
      green = 1;
      blue = -(nm - 510) / (510 - 490);
    } else if (nm < 580) {
      red = (nm - 510) / (580 - 510);
      green = 1;
      blue = 0;
    } else if (nm < 645) {
      red = 1;
      green = -(nm - 645) / (645 - 580);
      blue = 0;
    } else {
      red = 1;
      green = 0;
      blue = 0;
    }

    var factor;

    if (nm < 420) {
      factor = 0.3 + 0.7*(nm - 380) / (420 - 380);
    } else if (nm < 701) {
      factor = 1;
    } else {
      factor = 0.3 + 0.7*(780 - nm) / (780 - 700)
    }

    const r = this.adjust(red, factor);
    const g = this.adjust(green, factor);
    const b = this.adjust(blue, factor);

    return r + "," + g + "," + b;
  }

  onSliderChange(value) {
    const rgbString = this.visibleSpectrumToRGB(value);
    this.setState({ wavelength: value, rgb: rgbString });
  }

  rgbStyle(){
    return { color: "rgb(" + this.state.rgb + ")"};
  }

  render(){
    return (
      <div>
        <Slider
          min={380}
          max={780}
          defaultValue={this.state.wavelength}
          onChange={this.onSliderChange.bind(this)}
          trackStyle={{ height: 10 }}
          handleStyle={{
            height: 28,
            width: 28,
            marginLeft: -14,
            marginTop: -9,
          }}
          railStyle={{ height: 10 }}
        />
      <p style={this.rgbStyle()}>Wavelength: {this.state.wavelength} nm</p>
      <p>RGB: {this.state.rgb}</p>
      </div>
    )
  }
}

export default VisualSpectrumSlider
