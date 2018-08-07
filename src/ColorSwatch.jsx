const React = require("react");

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

class ColorSwatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="colorSwatch"
        style={{
          backgroundColor: rgbToHex(this.props.r, this.props.g, this.props.b),
        }}
      />
    );
  }
}

export default ColorSwatch;
