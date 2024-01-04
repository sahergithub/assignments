function Author(name, birthYear, nationality){
 this.name = name;
 this.birthYear = birthYear;
 this.nationality = nationality;
}

function Book(title, author, genre, price){
 this.title = title;
 this.author = author;
 this.genre = genre;
 this.price = price
}
Book.prototype.getBookInfo = function(){
 console.log(`Title:${this.title}`);
 console.log(`Author:${this.author}`);
 console.log(`Genre:${this.genre}`);
 console.log(`Price:${this.price}`);
}

const author1 = new Author("Robert Kiyosaki", 1997, "American")
console.log(author1);

const author2 = new Author("Henary James", 1904, "American")
console.log(author2);


const book1 = new Book("Rich Dad Poor Dad", author1.name, "Personal Finance", 437)
console.log(book1);

const book2 = new Book("The Golden Bowl", author2.name, "Modernist literary", 789)
console.log(book2);


book1.getBookInfo();
book2.getBookInfo();