function Book(tittle,author,isbn){
this.author = author;
this.isbn = isbn;
this.tittle = tittle;
}

function UI(){
    
}

document.getElementById('book-form').addEventListener('submit',
function(e){
    const tittle = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbnNumber = document.getElementById('isbn').value;

    const book = new Book(tittle,author,isbnNumber);    
         console.log(book);
          e.preventDefault();
}
)