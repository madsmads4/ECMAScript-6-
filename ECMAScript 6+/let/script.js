


var div;
var box = document.getElementById("box");

for (let i=0; i<5; i++) {
    div = document.createElement("div");
    div.onclick = function() {
        alert("This is box #" + i);
    }
    box.appendChild(div);
}



var topic = "javascript";

if(topic) {
    let topic = "ECMAScript";
    console.log("block", topic);
}

console.log("global", topic);
