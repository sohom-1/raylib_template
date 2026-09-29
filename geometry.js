function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function isOverLapping(obj1Start, obj1Width, obj2Start, obj2Width) {
    const obj1End = obj1Start + obj1Width;
    const obj2End = obj2Start + obj2Width;

    return (obj2Start <= obj1Start && obj1Start <= obj2End) || (obj2Start <= obj1End && obj1End <= obj2End)
}

module.exports = {
    calcOffset,
    isOverLapping
};