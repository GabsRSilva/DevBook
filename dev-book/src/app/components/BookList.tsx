import React from "react";
import Card from "./Card";
import "./bookList.css";

interface Book {
  id: string;
  volumeInfo: {
    imageLinks?: {
      thumbnail: string;
    };
  };
}

interface BookListProps {
  books: Book[];
  className?: string;
}

const BookList: React.FC<BookListProps> = ({ books, className }) => {
  const booksWithImages = books.filter(
    (book) => book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
  );

  if (!booksWithImages || booksWithImages.length === 0) {
    return <p>Nenhum livro encontrado com capa disponível.</p>;
  }

  return (
    <div className={`book-list ${className || ""}`}>
      {booksWithImages.map((book) => (
        <Card
          key={book.id}
          book={{
            id: "placeholder",
            volumeInfo: {
              title: "Placeholder Book",
              authors: ["Unknown Author"],
              imageLinks: {
                thumbnail: "https://via.placeholder.com/128x192",
              },
            },
          }}
        />
      ))}
    </div>
  );
};

export default BookList;
