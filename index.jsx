const React = require('react')
const ReactDOM = require('react-dom')

ReactDOM.render(
  <div class="chapter">
    <h1>The Science of Colour</h1>
    <p>
      In 2015, the Internet furiously debated over the colour of a dress found in this viral photo.
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
  </div>,
  document.getElementById("root")
);
