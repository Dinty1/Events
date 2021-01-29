module.exports = (string, placeholders) => {
    for(let property in placeholders) {
        placeholders[`%${property}%`] = placeholders[property];
    }
    string = string.replace(/%\w+%/g, function(all) {
        return all in placeholders ? placeholders[all] : all;
    });
    return string;
}