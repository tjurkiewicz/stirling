const {
    sphere,
    cylinder
} = require('@jscad/modeling').primitives
const {
    subtract,
    union
} = require('@jscad/modeling').booleans

const hollowCylinder = (options) => {
    const defaults = {
        center: [0, 0, 1],
        height: 2,
        radius: 1,
        innerRadius: 0.5,
        segments: 32
    };

    const {
        center,
        height,
        radius,
        innerRadius,
        segments
    } = Object.assign({}, defaults, options);

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


const engineCylinder = () => {
    const actualCylinder = hollowCylinder({
        radius: 1,
        innerRadius: 0.9,
        segments: 128
    });
    const baseCylinder = hollowCylinder({
        radius: 1.5,
        innerRadius: 1,
        height: 0.1,
        segments: 128,
        center: [0, 0, 0.05]
    });



    return union(actualCylinder, baseCylinder);
};


const main = () => {
    return engineCylinder();
}

module.exports = {
    main
}
