export class Book{
    id:number;
    bookcategory:string;
    bookname:string;
    bookauthor:string;
    bookpublisher:string;
    isbn:number;
    favbook:boolean;
    constructor(bookname,bookauthor,bookpublisher,id,bookcategory,isbn,favbook){
         this.id = id;
         this.bookcategory = bookcategory;
        this.bookname = bookname;
        this.bookauthor = bookauthor;
        this.bookpublisher = bookpublisher;
        this.isbn = isbn;
        this.favbook=favbook;
    }
}