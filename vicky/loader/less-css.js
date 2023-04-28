module.exports = function (source) {
    const re = /@\S*vicky\S*/g;
    const newStr = source.replace(re, (match) => {
        let str = match.substring(1, match.length)
        if (str.includes(';')) {
            str = str.substring(0, str.length - 1)
            return `var(--${str});`;
        }
        return `var(--${str})`;
    });
    return newStr
}