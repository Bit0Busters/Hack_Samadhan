const student={
    name:"Arun",
    class:"9th",
    marks:{
        english:76,
        maths:87,
        science:92,
        computer:95
    }
}
function total(student){
    let sum=0;
    for(let i=0;i<Object.keys(student.marks).length;i++){
        sum+=student.marks[Object.keys(student.marks)[i]];
    }
    return sum;
}
function highest(student){
    let highest=0;
    for(let i=0;i<Object.keys(student.marks).length;i++){
        if(student.marks[Object.keys(student.marks)[i]]>highest){
            highest=student.marks[Object.keys(student.marks)[i]];
        }
    }
    return highest;
}
console.log(student.name);
console.log(student.class);
console.log(student.marks);
console.log(`Total marks are : ${total(student)}`);
console.log(`Highest marks are : ${highest(student)}`);