// code your solution here

// const record = [ // Example test array
//     {year: "2015", result: "W"},
//     {year: "2014", result: "N/A"},
//     {year: "2013", result: "L"}
// ]

function superbowlWin(array) {
    const result = array.find(objectElement => {
        return objectElement.result === "W";
    });
    // console.log(result);
    return (result ? result.year : undefined)
}

// console.log(superbowlWin(record));

// function check(objElement) {
//     const result = objElement.result === "W";
//     // console.log(result);
//     // console.log(objElement);
//     // console.log(objElement.year);
//     const year = (result ? objElement.year : undefined)
//     return year
// }

// record.find(check); // Remember Array.find ONLY returns a true or false!! SO this does not work for the lab!
// console.log(record.find(check));