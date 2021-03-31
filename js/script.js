let courseList = [
    { code: "ACIT 1515", name: "Scripting for IT" },
    { code: "ACIT 1420", name: "Introduction to System Administration" },
    { code: "COMM 1116", name: "Business Communications" },
];

let courseNum;
do {
    courseNum = prompt("Enter the 4-digit course number(e.g. 1420): ")
} while (!isNaN(courseNum) === false || (isNaN(courseNum) === false && !courseNum.length === 4));

let resultIncludes = true;
let index = null;
for (let i = 0; i < 3; ++i){
    if (courseList[i].code.includes(courseNum)) {
        index = i;
        console.log(`Yes. I am taking the course: ${courseList[i].code} - ${courseList[i].name}`);
    } else {
        resultIncludes = false;
    };
};

if (resultIncludes === false){
  courseList.push({ code: `ACIT ${courseNum}`, name: null})
  alert(`ACIT ${courseNum} is added successfully!`)
}
