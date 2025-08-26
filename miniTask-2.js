function highestMarks(marks){
    let highest = 0;
    for(let i = 0; i < marks.length; i++){
        if(marks[i] > highest){
            highest = marks[i];
        }
    }
    return highest;
}

let marks=[50,78,98,86,64];
console.log(`Highest marks are : ${highestMarks(marks)}`)