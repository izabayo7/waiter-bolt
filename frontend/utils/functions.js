export const updateJavaScriptObject = (details1, details2) => {
    const outputObject = {};
    Object.keys(details1)
        .forEach(obj => outputObject[obj] =
            (details2.hasOwnProperty(obj) ? details2[obj] : details1[obj]));
    return outputObject;
}