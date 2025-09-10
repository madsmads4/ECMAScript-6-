let books = new Set();
books.add("Pride and Prejudice");
books.add("War and Peace").add("Fifty Shades Of Grey");
books.add("Oliver Twist");
books.add("Oliver Twist");

console.log(books);
console.log(books.size);

books.delete("Oliver Twist");
books.forEach(function (item) {
    console.log(item);
});

console.log("has Oliver Twist", books.has("Oliver Twist"))

