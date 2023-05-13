




 const URL_API_ID = 'https://books-backend.p.goit.global/books/bookId';


 const refs = {
   openModalCardBtn: document.querySelector('.data-modal-card-open'),
   modalCard: document.querySelector('#data-modal-card'),
   closeModalCardBtn: document.querySelector('.modal-card_close'),
   modalCardAddToShoppingBtn: document.querySelector('.data-modal-card-add-shopping'),
 };
 
 refs.openModalCardBtn.addEventListener('click', onClickOpen)
 refs.closeModalCardBtn.addEventListener('click', onClickClose)
 refs.modalCardAddToShoppingBtn.addEventListener('click', onClickAddShopping)
 
 function openModal(bookId) {
   refs.modal.style.display = 'block';
 
   const params = {
     q: URL_API_ID,
     book_image: 'book_image',
     list_name: 'list_name',
     author: 'author',
     description: 'description',
     category: 'category_list',
         buy: "buy_links"  
   };
 
   const renderBookDetails = (book, refs) => {
     const bookMarkup = `
     <img src="${book.image}" alt="${book.title}" />
     <h3 ${book.title} class="modal-card_title">ЗАБРОНЮВАТИ СТОЛИК</h3>
     <p ${book.author} class="modal-card_subtitle"></p>
     <p ${book.description} class="modal-card_desq"></p>
      <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
       </ul>
     `;
     refs.modalCardContent.innerHTML = bookMarkup;
     console.log(renderBookDetails)
 
   };
 
   const queryString = new URLSearchParams(params).toString();
   fetch(`${URL_API_ID}${bookId}?${queryString}`)
     .then(response => response.json())
     .then(data => {
       renderBookDetails(data, refs);
     })
     .catch(error => {
       console.log('Error:', error);
     });
 }


function closeModal() {
  refs.modal.style.display = 'none';
}

function addToShoppingList() {
  console.log('Book added to shopping list');
}

 
export { modalCard };



