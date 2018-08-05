import Slider from 'rc-slider';
const React = require("react");

import 'rc-slider/assets/index.css';

class VisualSpectrumSlider extends React.Component {
  render(){
    return (
      <div>
        <Slider
          min={380}
          max={780}
          defaultValue={400}
          trackStyle={{ height: 10 }}
          handleStyle={{
            height: 28,
            width: 28,
            marginLeft: -14,
            marginTop: -9,
          }}
          railStyle={{ height: 10 }}
        />
      </div>
    )
  }
}

export default VisualSpectrumSlider
