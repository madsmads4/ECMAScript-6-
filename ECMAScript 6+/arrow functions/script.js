// =>

// let studentList = (students) => 
//     console.log(students);

// studentList(["A", "B", "C"]);

// let list = ["apple", "banana", "strawberry"];
// list.map((item)  =>
//     console.log(item));

let person = {
    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function() {
        this.hobbies.forEach((hobby) => {
            let string = `${this.first} likes to ${hobby}`;
            console.log(string);
        }
    )}
}

person.printHobbies();