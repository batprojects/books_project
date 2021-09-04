function addFavoriteBook(bookName) {
    if(!bookName.includes("Great")){
        favoriteBooks.push(bookName);
    } 
}
function addLeastFavoriteBook(bookName){
    if(bookName.includes("Dawn")|| bookName.includes("Divergent") || bookName.includes('New Moon')){
        leastFavoriteBooks.push(bookName);
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

function printFavoriteBooks(bookName){
    console.log(`Here are my favorite books: ${favoriteBooks.length}`);
        for(let bookName of favoriteBooks){
            console.log(bookName);
        }

}
var leastFavoriteBooks = [];

addLeastFavoriteBook("Breaking Dawn");
addLeastFavoriteBook("The Song of Achilles");
addLeastFavoriteBook("Anna and the French Kiss");
addLeastFavoriteBook("The Host");
addLeastFavoriteBook("Divergent");
addLeastFavoriteBook("The Alchemist");
addLeastFavoriteBook("New Moon");


function printLeastFavoriteBooks(bookName){
    console.log(`Here are my least favorite books: ${leastFavoriteBooks.length}`);
        for(let bookName of leastFavoriteBooks){
            console.log(bookName);
        }
    
}

// TODO: print out favorite books
console.log(printFavoriteBooks());
console.log(printLeastFavoriteBooks());