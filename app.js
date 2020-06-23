// const wmf = document.querySelector('#book-list li:nth-child(2) .name');

// console.log(wmf);

//  it will return all elements in that query

//  let books = document.querySelectorAll('#book-list li .name');

//  console.log(books);

//  Array.from(books).forEach(function(book){
//    console.log(book);
//  });


// var books = document.querySelectorAll('#book-list li .name');


// Array.from(books).forEach(function(book){
  // console.log(book.textContent);

  // book.textContent="hello"

  // book.textContent +=" (test)"


// });
 
// const bookList = document.querySelector('#book-list');

//console.log(bookList.innerHTML);

// bookList.innerHTML += ' <h1>test</h1>';


//node queries

// const banner = document.querySelector('#page-banner');

//node type, these are always a number
// console.log('this is the node type of #page-banner',banner.nodeType);

//node name what kind of element tag it is

// console.log('this is the node name of #page-banner:',banner.nodeName);


//child node gives yes or no

// console.log('this is the child node of #page-banner:',banner.hasChildNodes());

//it will show the clone of the child of an element
// const clonedBanner = banner.cloneNode(true);

// console.log(clonedBanner);

// parents Node,
// const bookList= document.querySelector('#book-list');

// console.log('these are the parents of #book-list :',bookList.parentNode.parentNode);


// childnode
// console.log('these are the child of the book-list:',bookList.childNodes);



// const bookList = document.querySelector('#book-list');



// console.log('this is next siblingg ',bookList.nextSibling.nextSibling);

// console.log('this is next element siblingg ',bookList.nextElementSibling);

// console.log('this is the previous sibling:', bookList.previousSibling.previousSibling);

// console.log('this is previous element siblingg ',bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br> this is test';

var btns  = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
  btn.addEventListener('click', function(e){


    const li = e.target.parentElement;
    li.parentNode.removeChild(li); 

  });
});


var clickTitle = document.querySelector('#book-list').querySelector('h2');


clickTitle.addEventListener('click', function(e){

  const bodyList = document.querySelector('#book-list');

  bodyList.innerHTML = ' <style> background-color: grey;</style>';
  

  console.log(bodyList)

});

console.log(clickTitle);


//proper way of add function of deleting list item from a list


//delete books
const list = document.querySelector('#book-list ul');

list.addEventListener('click',function(e){

  if(e.target.className == 'delete'){

    const li = e.target.parentElement;
    list.removeChild(li);
  }

});

//add book
const addForm = document.forms['add-book'];

addForm.addEventListener('submit',function(e){

  e.preventDefault();
  var value = addForm.querySelector('input[type="text"]').value;

  console.log(value);

  //create elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //add content to elements append to li , spans both


  //adding classes to the elements
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');
  
  //adding values to elements
  bookName.textContent= value;
  deleteBtn.textContent='delete';

  li.appendChild(bookName);
  li.appendChild(deleteBtn);

  //append li to ul
  list.appendChild(li);

  value.textContent=' ';

}); 





// //search box filter;

// const searchBar= document.forms['search-books'].querySelector('input');

// searchBar.addEventListener('keyup', function(e){

//   const term = e.target.value.toLowerCase();

//   const books = list.getElementsByTagName('li');

//   Array.from(books).forEach(function(book){

//     const title = book.querySelector('.name').textContent.toLowerCase();

//     // //evi likhya
//     // console.log(title);

//     if(title.indexOf(term) != -1){
      
//       book.style.display ='block';

//     }
//     else{
//       book.style.display='none';
//     }

//   });


// });


//search btn practice 2


 const searchBar = document.forms['search-books'].querySelector('input');

 searchBar.addEventListener('keyup', function(e){

  const term = e.target.value.toLowerCase();

  const books = list.getElementsByTagName('li');

  Array.from(books).forEach(function(book){

    const title = book.querySelector('.name').textContent.toLowerCase();

    if(title.indexOf(term) != -1){
      
      book.style.display = 'block';

    }

    else{
      book.style.display='none';
    }


  });



 });
