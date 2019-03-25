
const class07Students = ["Fakhrul", "Islam", "Emil", "Chirstopher" ];
function addStudentToClass(studentName) {
    if (class07Students.length >= 6 && studentName !== "Queen") {
        console.log("Cannot add more students to class 07");
    }
    else if (class07Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class");
         }
    else if (studentName === "") {
        console.log("You cannot add an empty string to a class");
    }
    else {
        class07Students.push(studentName);
        }
 }
addStudentToClass ("Raheem");
addStudentToClass("Sina");
addStudentToClass ("Fraky");
addStudentToClass ("Henrik");
addStudentToClass ("Munia");
addStudentToClass ("Queen");
console.log (class07Students);

function getNumberOfStudents() {
    return class07Students.length;
}
console.log(getNumberOfStudents());