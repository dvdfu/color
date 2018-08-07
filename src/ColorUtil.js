const MAX_INTENSITY = 255;
const GAMMA = 0.8;

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function correctGamma(value, factor) {
  if (value == 0) return 0;
  return Math.round(MAX_INTENSITY * Math.pow(value * factor, GAMMA));
}

function wavelengthToRgb(nm) {
  var r, g, b;

  if (nm < 380 || nm > 780) {
    r = 0;
    g = 0;
    b = 0;
  } else if (nm < 440) {
    r = -(nm - 440) / (440 - 380);
    g = 0;
    b = 1;
  } else if (nm < 490) {
    r = 0;
    g = (nm - 440) / (490 - 440);
    b = 1;
  } else if (nm < 510) {
    r = 0;
    g = 1;
    b = -(nm - 510) / (510 - 490);
  } else if (nm < 580) {
    r = (nm - 510) / (580 - 510);
    g = 1;
    b = 0;
  } else if (nm < 645) {
    r = 1;
    g = -(nm - 645) / (645 - 580);
    b = 0;
  } else {
    r = 1;
    g = 0;
    b = 0;
  }

  var factor;

  if (nm < 420) {
    factor = 0.3 + 0.7 * (nm - 380) / (420 - 380);
  } else if (nm < 701) {
    factor = 1;
  } else {
    factor = 0.3 + 0.7 * (780 - nm) / (780 - 700);
  }

  return {
    r: correctGamma(r, factor),
    g: correctGamma(g, factor),
    b: correctGamma(b, factor),
  };
}

export default {
  componentToHex,
  rgbToHex,
  correctGamma,
  wavelengthToRgb,
};
