import Title from "../components/ui/SectionTitle";
import BooksCarousel from "../layout/BooksCarousel";

export default function Books() {
    return (
        <section className="flex flex-col justify-center items-center">
            <Title variant="subtitle">Livros Lidos</Title>

            <div className="flex items-center justify-center gap-6 pt-8">
                <BooksCarousel />
            </div>
        </section>
    )
}