let course = new Map();

course.set("react", {discription: "ui"});
course.set("jest", {discription: "testing" });

console.log(course);
console.log(course.react);
console.log(course.get("react"));

let details = new Map ([
    [new Date(), "today"],
    [2, {javascript: ["js", "node", "react"] }],
    ["items", [1, 2]]
]);

console.log(details.size);

details.forEach(function(item) {
    console.log(item);
});