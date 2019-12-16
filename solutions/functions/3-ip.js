'use strict';

const ipToInt = (ip = '10.0.0.1') => {
    const arr = ip.split('.');
    return arr.reduce((acc, val, idx) => {
        const shiftVal = 8 * (arr.length - 1 - idx);
        return acc + (Number(val) << shiftVal);
    }, 0)
    
}

module.exports = { ipToInt };