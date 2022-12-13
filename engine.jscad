const { sphere, cylinder } = require('@jscad/modeling').primitives
const { subtract } = require('@jscad/modeling').booleans
 
const engineBlock = (options) => {
  const defaults = {
    center: [0, 0, 0],
    height: 2,
    radius: 1,
    innerRadius: 0.5,
    segments: 32
  };
  
  const { center, height, radius, innerRadius, segments } = Object.assign({}, defaults, options);
  
  const outerOptions = {
    center,
    height,
    radius,
    segments,
  };
  const innerOptions = {
    center,
    height,
    radius: innerRadius,
    segments,
  };
  
  const outer = cylinder(outerOptions);
  const inner = cylinder(innerOptions);
  return subtract(outer, inner);
}
 
const main = () => {
  return engineBlock({innerRadius: 0.75, segments: 64}) // a single shape
}
 
module.exports = { main }
