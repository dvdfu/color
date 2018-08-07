import Slider from "rc-slider";
import ColorSwatch from "./ColorSwatch.jsx";
import ColorTarget from "./ColorTarget.jsx";
import ColorUtil from "./ColorUtil.js";
import "rc-slider/assets/index.css";

const React = require("react");

class VisualSpectrumSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wavelength: 500 };
  }

  onSliderChange(value) {
    this.setState({
      wavelength: value,
    });
  }

  render() {
    const color = ColorUtil.wavelengthToRgb(this.state.wavelength);

    return (
      <div className="slider-container">
        <ColorSwatch r={color.r} g={color.g} b={color.b} />
        <p>
          Wavelength: <strong>{this.state.wavelength}nm</strong>
        </p>
        <Slider
          min={300}
          max={800}
          defaultValue={this.state.wavelength}
          onChange={this.onSliderChange.bind(this)}
          handleStyle={{
            height: 40,
            width: 40,
            marginLeft: -20,
            marginTop: -10,
          }}
          trackStyle={{
            height: 20,
            borderRadius: 0,
          }}
          railStyle={{
            height: 20,
            borderRadius: 0,
          }}
        />

        <div className="targets">
          <ColorTarget target={640} guess={this.state.wavelength} />
          <ColorTarget target={400} guess={this.state.wavelength} />
          <div
            className="color-target"
            style={{ backgroundColor: ColorUtil.rgbToHex(200, 120, 0) }}
          />
          <ColorTarget target={600} guess={this.state.wavelength} />
          <div
            className="color-target"
            style={{ backgroundColor: ColorUtil.rgbToHex(255, 0, 200) }}
          />
          <ColorTarget target={520} guess={this.state.wavelength} />
        </div>
      </div>
    );
  }
}

export default VisualSpectrumSlider;
