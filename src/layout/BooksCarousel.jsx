import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import books from "../data/books";
import BookCard from "./BookCard";

export default function BooksCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((current) =>
            current === books.length - 1 ? 0 : current + 1
        );
    };

    const previous = () => {
        setCurrentIndex((current) =>
            current === 0 ? books.length - 1 : current - 1
        );
    };

    return (
        <div className="relative w-full max-w-6xl">
            <div className="overflow-hidden">
                <div
                    className="flex items-stretch gap-4 transition-transform duration-300"
                    style={{
                        transform: `translateX(calc(-${currentIndex} * (25% + 18px)))`,
                    }}
                >
                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="flex h-auto shrink-0"
                        >
                            <BookCard book={book} />
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={previous}
                aria-label="Livro anterior"
                className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:cursor-pointer hover:shadow-lg"
            >
                <ChevronLeft size={20} />
            </button>

            <button
                onClick={next}
                aria-label="Próximo livro"
                className="absolute right-0 top-1/2 z-10 translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:cursor-pointer hover:shadow-lg"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
}