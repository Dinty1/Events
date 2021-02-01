/**
* @param {string} string The text to parse
* @param {placeholders} object The placeholders to insert
*/
module.exports = (string, placeholders) => {
    for(let property in placeholders) {
        placeholders[`%${property}%`] = placeholders[property];
    }
    string = string.replace(/%\w+%/g, function(all) {
        return all in placeholders ? placeholders[all] : all;
    });
    return string;
}