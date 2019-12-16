'use strict';

const generateKey = (length, possible) => {
    let res = '';
    if (length && possible) {
        for (let i = 0; i < length; i++) {
            res += possible[Math.floor(Math.random() * possible.length)]
        }
    } else {
        res = 'please enter length and possible'
    }
    return res
};

module.exports = { generateKey };