
let courseList = [
    { code: "ACIT 1515", name: "Scripting for IT" },
    { code: "ACIT 1420", name: "Introduction to System Administration" },
    { code: "COMM 1116", name: "Business Communications" },
];
let courseNum;
do {
    courseNum = prompt("Enter the course code (e.g. 1350) : ");
}
while (!isNaN(courseNum) === false);
for(let item of courseList)
{
    if(item.code.includes(courseNum) === true && courseNum.length === 4)
    {
        console.log(`Yes. I am taking the course: ${courseList["code"]} - ${courseList["name"]}`);
    }
    else{
        courseList.push({ code: "ACIT ____", name: null });
        console.log(`Course ${courseNum} is successfully added`)
    }
}
