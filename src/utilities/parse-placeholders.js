module.exports = (string, placeholders) => {
    string = string.replace(/%\w+%/g, function(all) {
        return all in placeholders ? placeholders[all] : all;
    });
    return string;
}