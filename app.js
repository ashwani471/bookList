function Book(tittle,author,isbn){
this.author = author;
this.isbn = isbn;
this.tittle = tittle;
}

function UI(){}

UI.prototype.addBooktoList = function(book){
    const list = document.getElementById('book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.tittle}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class = "delete">X</a></td>
    `

    // console.log(isbnNumber);
    list.appendChild(row);
}

UI.prototype.clearField = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';    
}

UI.prototype.showAlert = function(message, className){
    const div = document.createElement('div');

    div.className = `alert ${className}`;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');

    const form = document.querySelector('#book-form');

    container.insertBefore(div,form);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    },2000);
}

UI.prototype.deleteBook=function(target){
if(target.className === 'delete'){
   target.parentElement.parentElement.remove();
}
}

document.getElementById('book-form').addEventListener('submit',
function(e){
    const tittle = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbnNumber = document.getElementById('isbn').value;

    const book = new Book(tittle,author,isbnNumber);    
        
    const ui = new UI();

    if(tittle === '' || author === '' || isbnNumber === ''){
        ui.showAlert('Please fill in all fields' , 'error');
    }else{

    ui.addBooktoList(book);

    ui.showAlert('book Added!' , 'success');

    ui.clearField();
    
    }

    e.preventDefault();
    
}
)

document.getElementById('book-list').addEventListener('click',
function(e){

   const ui = new UI();
   ui.deleteBook(e.target);
   e.preventDefault();
})