const $template = document.createElement('template');
$template.innerHTML = `
     <div class = 'book-list'>
         <form class = 'book-list-form'>
         <h1>BookList</h1>
            <input-container class = 'title' placeholder = 'Title'></input-container>
            <input-container class = 'author' placeholder = 'Author'></input-container>
            <input-container class = 'isbn' placeholder = 'Isbn'></input-container>
            <button>Add Book</button>
            </form>
            <div class = 'book-list-child1'>
            <div class = 'text'>
            <span>Title</span><span>Author</span><span>Isbn</span>
            </div>
               </div>
            <div class = 'book-list-child2'>
            
               </div>
       </div>
`;

export default class BookList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$form = this.querySelector('.book-list-form');
        this.$listChild2 = this.querySelector('.book-list-child2');
        this.$title = this.querySelector('.title');
        this.$author = this.querySelector('.author');
        this.$isbn = this.querySelector('.isbn');
    }

    //display book
     displayBook(book) {
         let div = document.createElement('div');
         div.innerHTML = 
    `<span class = 'title'>${book.title}</span>
    <span class = 'author'>${book.author}</span>
    <span class = 'isbn'>${book.isbn}</span>
    <i class="fas fa-times-circle delete"></i>`
    this.$listChild2.appendChild(div)
     }
    
    //remove book in UI
    removeUI(x) {
           if(x.classList.contains('delete')) {
               x.parentElement.remove()
           }
    }
    //remove book in localStorage

    removeInLocal(isbn) {
        let allBook = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
         allBook.forEach((book, index) => {
             if(book.isbn == isbn) {
                 allBook.splice(index,1);
             }
         })
         localStorage.setItem('books', JSON.stringify(allBook))
    }


    connectedCallback() {
        //display book when page load
        let allBook = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
        allBook.forEach(book => {
            this.displayBook(book)
        })
        //remove book 
        this.$listChild2.addEventListener('click', (e) => {

            
            this.removeUI(e.target);

            this.removeInLocal(e.target.previousElementSibling.textContent)
        })

        //add book
        this.$form.onsubmit = (event) => {
            event.preventDefault();
            let title = this.$title.value;
            let author = this.$author.value;
            let isbn = this.$isbn.value;

            if (!title) {
                alert('Enter Title!');

            }
            if (!author) {
                alert('Enter Author!');

            }
            if (!isbn) {
                alert('Enter Isbn!');

            }
            if (title && author && isbn) {
                let book = {
                    'title' : title,
                    'author' : author,
                    'isbn' : isbn
                }
                this.$title.clear()
                this.$author.clear()
                this.$isbn.clear()
                //add book in UI
                this.displayBook(book)
               //add book in localStorage
               let allBook = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
               allBook.push(book);
               localStorage.setItem('books',JSON.stringify(allBook))

            
            }
        }
    }
}
window.customElements.define('book-list', BookList)