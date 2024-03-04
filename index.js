// Sample data - an array of books
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
    { id: 3, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  ];
  
  // Helper function to filter books by genre
  function filterBooksByGenre(bookArray, genre) {
    if (!Array.isArray(bookArray) || bookArray.length === 0 || typeof genre !== 'string') {
      throw new Error("Invalid inputs. Book array must be a non-empty array, and genre must be a string");
    }
  
    return bookArray.filter(book => book.genre === genre);
  }
  
  // Helper function to map books to a simplified format
  function mapBooksToTitles(bookArray) {
    if (!Array.isArray(bookArray) || bookArray.length === 0) {
      throw new Error("Input must be a non-empty array of books");
    }
  
    return bookArray.map(book => ({ id: book.id, title: book.title }));
  }
  
  // Demo using the helper functions
  try {
    const fictionBooks = filterBooksByGenre(books, 'Fiction');
    console.log("Fiction Books:", fictionBooks);
  
    const bookTitles = mapBooksToTitles(books);
    console.log("Book Titles:", bookTitles);
  } catch (error) {
    console.error("Error:", error.message);
  }
  