class Book {
    constructor(id, title, description, author) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(bookInfo) {
      const newBook = new Book((this.books.length + 1).toString(), bookInfo.title, bookInfo.description, bookInfo.author);
      this.books.push(newBook);
      return newBook;
    }
  
    getBooks() {
      return this.books;
    }
  
    removeBookById(id) {
      this.books = this.books.filter(book => book.id !== id);
    }
  
    getBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    updateBookById(id, info) {
      const bookToUpdate = this.getBookById(id);
  
      if (bookToUpdate) {
        if (info.title) {
          bookToUpdate.title = info.title;
        }
        if (info.description) {
          bookToUpdate.description = info.description;
        }
        if (info.author) {
          bookToUpdate.author = info.author;
        }
        return bookToUpdate;
      }
  
      return undefined;
    }
  }
  
  const myLibrary = new Library();
  
  const book1 = myLibrary.addBook({
    title: 'Código limpo: habilidades práticas do Agile software',
    description: 'Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento.',
    author: 'Robert C. Martin',
  });
  
  const book2 = myLibrary.addBook({
    title: 'Arquitetura limpa: o guia do artesão para estrutura e design de software',
    description: 'As regras universais de arquitetura de software aumentam dramaticamente a produtividade dos desenvolvedores ao longo da vida dos sistemas de software.',
    author: 'Robert C. Martin',
  });
  
  console.log(myLibrary.getBooks());
  
  myLibrary.updateBookById(book1.id, { title: 'Clean Clean Code: A Handbook of Agile Software Craftsmanship', description:'A clear and concise guide to basic Agile values and principles. Perfect for those new to Agile methods and long-time developers who want to simplify approaches ...' });
  
  console.log(myLibrary.getBooks());
  
  myLibrary.removeBookById(book2.id);
  
  console.log(myLibrary.getBooks());
  