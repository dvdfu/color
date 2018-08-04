const React = require('react')
const ReactDOM = require('react-dom')

ReactDOM.render(
  <div>
    <h1>The Science of Colour</h1>
    <p>
      In 2015, the Internet furiously debated over the colour of a dress found in this infamous photo.
      Is the dress white and gold, or black and blue?
    </p>
    <img src="assets/dress.png" alt="The dress"></img>
    <p>
      This simple question went viral.
      It turns out the dress is actually black and blue... but how was everyone so evenly divided on the colour?
    </p>
    <p>
      How we perceive colour is based on a complex combination of the properties of the lighting, the subject, and our brains.
      The following is an interactive explanation of how colour works.
    </p>
  </div>,
  document.getElementById("root")
);
