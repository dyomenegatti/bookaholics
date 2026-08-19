import Card from "../components/ui/Card";
import Title from "../components/ui/SectionTitle";

export default function BookCard({ book }) {
    return (
        <Card
            variant="secondary"
            className="flex h-full w-72 flex-col overflow-hidden"
        >
            <img
                src={book.image}
                alt={book.title}
                className="h-80 w-full shrink-0 object-cover"
            />

            <div className="flex flex-1 flex-col gap-2 p-5">
                <Title variant="secondary">
                    {book.title}
                </Title>

                <p className="text-base text-gray-600">
                    {book.author}
                </p>

                <span className="mt-auto w-fit rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                    {book.date}
                </span>
            </div>
        </Card>
    );
}