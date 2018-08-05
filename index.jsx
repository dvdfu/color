const React = require("react");
const ReactDOM = require("react-dom");

const chapters = [];

chapters[0] = (
  <div className="chapter">
    <h1>The Science of Colour</h1>
  </div>
);

chapters[1] = (
  <div className="chapter">
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
  <div className="chapter">
    <h2>Light as a Wave</h2>
    <p>It's true</p>
  </div>
);

ReactDOM.render(chapters, document.getElementById("root"));
