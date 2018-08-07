import ColorUtil from "./ColorUtil.js";
const React = require("react");

const WAVELENGTH_THRESHOLD = 10;

class ColorTarget extends React.Component {
  constructor(props) {
    super(props);
  }

  getCorrectness() {
    var diff = Math.abs(this.props.target - this.props.guess);
    if (diff > WAVELENGTH_THRESHOLD) return 0;
    return (WAVELENGTH_THRESHOLD - diff) / WAVELENGTH_THRESHOLD;
  }

  render() {
    var color = ColorUtil.wavelengthToRgb(this.props.target);
    var hex = ColorUtil.rgbToHex(color.r, color.g, color.b);
    if (this.getCorrectness() > 0) {
      return (
        <div className="color-target" style={{ backgroundColor: hex }}>
          <img src="/assets/checkmark.png" />
        </div>
      );
    }
    return <div className="color-target" style={{ backgroundColor: hex }} />;
  }
}

export default ColorTarget;
