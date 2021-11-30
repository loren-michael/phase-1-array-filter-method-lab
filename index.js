

//findMatching

// const matching = drivers.filter( drivers => {
//     return drivers = "bobby"
// })

// function findMatching(array, name){
//     let matchingNames = (array.filter(x => x === name));
//     return matchingNames;
// }

function findMatching(array, name){
    return array.filter(x => x.toLowerCase() === name.toLowerCase());
}

// fuzzyMatch

function fuzzyMatch(array, name){
    const initial = name.length;
    return array.filter(x => x.slice(0, initial) === name);
}

// matchName

function matchName(array, driver){
    return array.filter(item => item.name === driver);
}
