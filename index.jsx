const React = require("react");
const ReactDOM = require("react-dom");
import VisualSpectrumSlider from "./src/VisualSpectrumSlider.jsx";

const chapters = [];

chapters[0] = (
  <div className="chapter" key="0">
    <h1>The Science of Colour</h1>
  </div>
);

chapters[1] = (
  <div className="chapter" key="1">
    <h2>Huh???</h2>
    <p>
      In 2015, the Internet furiously debated over the colour of a dress found
      in this viral photo. Is the dress white and gold, or black and blue?
    </p>
    <img src="assets/dress.png" alt="The dress" />
    <p>
      This meme was so popular that it's simply referred to as "the dress".
      While it turned out the dress is actually black and blue, the even divide
      between #BlackAndBlue and #WhiteAndGold showed us something. Under certain
      conditions, black can look like gold, and blue can look like white. ...How
      exactly is that possible?
    </p>
    <p>
      This post explains the science behind how colour exists and is perceived,
      and by the end you'll understand how BLACK = GOLD and BLUE = WHITE.
    </p>
  </div>
);

chapters[2] = (
  <div className="chapter" key="2">
    <h2>Light as a Wave</h2>
    <p>
      Without light, there wouldn’t be any colour to see. So let’s start with
      how exactly light works.
    </p>
    <p>
      Light is a type of energy that travels in a wave. The{" "}
      <strong>wavelength</strong> describes how much energy it carries; smaller
      wavelengths mean higher energy.
    </p>
    <table>
      <tbody>
        <tr>
          <th>Wavelength Range (nm)</th>
          <th>Common Name</th>
        </tr>
        <tr>
          <td>0.0001 - 0.01</td>
          <td>Gamma Rays</td>
        </tr>
        <tr>
          <td>0.01 - 10</td>
          <td>X-Rays</td>
        </tr>
        <tr>
          <td>10 - 100</td>
          <td>Ultraviolet</td>
        </tr>
        <tr>
          <td>380 - 700</td>
          <td>Visible Light</td>
        </tr>
        <tr>
          <td>VERIFY</td>
          <td>Infrared</td>
        </tr>
        <tr>
          <td>VERIFY</td>
          <td>Microwaves</td>
        </tr>
        <tr>
          <td>VERIFY</td>
          <td>Radio Waves</td>
        </tr>
      </tbody>
    </table>
    <p>
      Our eyes can detect light with wavelengths around 390-700nm, so we call
      this range of the light the <strong>visible spectrum</strong>. There are
      plenty of other wavelengths we can’t see, like microwaves, radio waves,
      and X-rays, because our eyes don’t react to them.
    </p>
    <p>
      Within the visible spectrum, the wavelength defines which colour we see!
      Try to find the wavelengths that correspond to the following colours:
    </p>
    <VisualSpectrumSlider />
  </div>
);

ReactDOM.render(chapters, document.getElementById("root"));
