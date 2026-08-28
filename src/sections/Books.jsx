
import { useState, useEffect } from 'react';
import Card from "../components/ui/Card";
import Title from "../components/ui/SectionTitle";
import books from "../data/books";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Book({ book }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth < 480) {
            setItemsPerView(1);
        } else if (window.innerWidth < 768) {
            setItemsPerView(2);
        } else if (window.innerWidth < 1024) {
            setItemsPerView(3);
        } else {
            setItemsPerView(4);
        }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
        handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, itemsPerView]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? books.length - itemsPerView : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev >= books.length - itemsPerView ? 0 : prev + 1));
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Title variant="subtitle" className='text-center pb-4'>Livros Lidos</Title>
                    
                <div className="relative">
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-indigo-50 transition-colors"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6 text-primary" />
                    </button>

                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out h-4/5"
                            style={{
                                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`
                            }}
                        >
                            {books.map((book, index) => (
                                <Card
                                    key={index}
                                    variant="secondary"
                                    className="flex w-70 h-[500px] flex-col overflow-hidden"
                                    style={{ minWidth: `${100 / itemsPerView}%` }}
                                >
                                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                                        <img
                                            src={book.image}
                                            alt={book.title}
                                            className="h-80 w-full shrink-0 object-cover"
                                        />

                                        <div className="flex flex-1 flex-col gap-2 p-5">
                                            <Title variant="secondary">
                                                {book.title}
                                            </Title>

                                            <p className="text-base text-text/80">
                                                {book.author}
                                            </p>

                                            <span className="mt-auto w-fit rounded-full bg-support/10 px-3 py-1 text-sm text-support">
                                                {book.date}
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-indigo-50 transition-colors"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-6 h-6 text-primary" />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: Math.ceil(books.length / itemsPerView) }).map((_, index) => (
                        <button
                        key={index}
                        onClick={() => setCurrentIndex(index * itemsPerView)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            Math.floor(currentIndex / itemsPerView) === index
                            ? 'bg-primary w-8'
                            : 'bg-support'
                        }`}
                        aria-label={`Ir para slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}