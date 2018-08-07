import ColorUtil from "./ColorUtil.js";
const React = require("react");

class ColorSwatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="color-swatch"
        style={{
          backgroundColor: ColorUtil.rgbToHex(
            this.props.r,
            this.props.g,
            this.props.b,
          ),
        }}
      />
    );
  }
}

export default ColorSwatch;
