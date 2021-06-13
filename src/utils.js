export const formatDate = dateStr => {
    const months =
    ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const date = new Date(dateStr);
    return date instanceof Date && !isNaN(date)
        ?  months[date.getMonth()] + ' ' + date.getFullYear()
        : dateStr;
};

export const classnames = (...args) => {
    // strip any undefined
    const classnames = args.reduce((classnames, item) => {
        item && classnames.push(item);
        return classnames;
    }, []);

    return classnames.join(' ');
}

export const repeat = (n, func) => {
    const arr = [];
    for(let i=0; i < n; i++){
        arr.push(func(i));
    }
    return arr;
}