const React = require('react')
const ReactDOM = require('react-dom')

ReactDOM.render(
  <div class="chapter">
    <h1>The Science of Colour</h1>
    <p>
      In 2015, the Internet furiously debated about an image of a dress.
      Is the dress white and gold, or black and blue?
    </p>
    <img src="assets/dress.png" alt="The dress"></img>
    <p>
      This meme was so popular that it's simply referred to as "the dress".
      While it turned out the dress is actually black and blue, the even divide between #BlackAndBlue and #WhiteAndGold showed us something.
      Under certain conditions, black can look like gold, and blue can look like white.
      ...How exactly is that possible?
    </p>
    <p>
      This post explains the science behind how colour exists and is perceived, and by the end you'll understand how BLACK = GOLD and BLUE = WHITE.
    </p>
    <h2>Light</h2>
    <p>
      Without light, there wouldn’t be any colour to see. So let’s start with how exactly light works.
    </p>
    <p>
      Light is a type of energy that travels in a wave.
      The <strong>wavelength</strong> describes how much energy it carries; smaller wavelengths mean higher energy.
    </p>
    [EM Spectrum table that shows wavelengths and common names for them]
    <p>
      Our eyes can detect light with wavelengths around 390-700nm, so we call this range of the light the <strong>visible spectrum</strong>.
      There are plenty of other wavelengths we can’t see, like microwaves, radio waves, and X-rays, because our eyes don’t react to them.
    </p>
    <p>
      Within the visible spectrum, the wavelength defines which colour we see!
      Try to find the wavelengths that correspond to the following colours:
    </p>

  </div>,
  document.getElementById("root")
);
