import Link from "next/link";
import "./Card.css";
import Image from "next/image";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    imageLinks?: {
      thumbnail: string;
    };
  };
}

interface CardProps {
  book: Book;
  className?: string;
}

const Card: React.FC<CardProps> = ({ book, className }) => {
  const { id, volumeInfo } = book;
  const { title, authors, imageLinks } = volumeInfo;

  return (
    <div className={`book-item ${className || ""}`}>
      <Link href={`/livro/${id}`}>
        <Image
          className="border-2 border-customBlue"
          src={imageLinks?.thumbnail || "/placeholder-image.jpg"}
          alt={title}
          width={128}
          height={192}
          unoptimized={true}
        />
        <h3>{title}</h3>
        <p>Autor(es): {authors ? authors.join(", ") : "Desconhecido"}</p>
      </Link>
    </div>
  );
};

export default Card;
