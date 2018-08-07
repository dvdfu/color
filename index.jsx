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
      Light is a type of energy that travels in a wave. The{" "}
      <strong>wavelength</strong> describes how much energy it carries; a
      smaller wavelength means more energy.
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
          <td>390 - 700</td>
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
      Our eyes are built to detect light with wavelengths of around 390 - 700nm,
      so we call this range the <strong>visible spectrum</strong>! There are
      plenty of other wavelengths we can’t see, like microwaves, radio waves,
      and X-rays, because our eyes can’t react to them.
    </p>
    <p>
      Drag the slider below to control the wavelength of a light wave, and see
      what colour it produces! Try to get the colour to match some of the sample
      colours in the palette.
    </p>
    <VisualSpectrumSlider />
    <p>
      Why don’t some colours we know, like pink or brown, appear in the visible
      spectrum?
    </p>
    <p>
      The visible spectrum only represents the colour of a <i>single</i> wave.
      In reality, light sources such as light bulbs emit many many waves that
      have a wide range of different wavelengths. The combinations and
      intensities of these waves produce all the colours we know!
    </p>
  </div>
);

ReactDOM.render(chapters, document.getElementById("root"));
