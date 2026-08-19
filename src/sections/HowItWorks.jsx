import Card from "../components/ui/Card";
import Title from "../components/ui/SectionTitle";
import howItWorksCards from "../data/howItWorks";

export default function HowItWorks() {
    return (
        <section className="flex flex-col justify-center items-center">
            <Title variant="subtitle">Como Funciona</Title>

            <div className="flex items-center justify-center gap-6 pt-8">
                {howItWorksCards.map((step) => {
                    const Icon = step.icon;

                    return (
                        <Card
                            key={step.id} 
                            variant="secondary" 
                            className="h-64 py-6 px-6 flex flex-col items-center justify-center gap-4"
                        >
                            <Icon size={34} className="text-indigo-600" />
                            <h4 className="text-center text-lg font-medium text-gray-800">{ step.title }</h4>
                            <p className="text-center text-base text-gray-600">{ step.description }</p>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}