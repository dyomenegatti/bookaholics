import Card from "../components/ui/Card";
import Title from "../components/ui/SectionTitle";
import { Send, Calendar, Vote } from 'lucide-react';

export default function HowItWorks() {
    const features = [
        {
            icon: <Send className="w-10 h-10 text-primary" />,
            title: 'Clube online e gratuito',
            description: 'Participe pelo Telegram de forma totalmente gratuita e sem compromisso.'
        },
        {
            icon: <Calendar className="w-10 h-10 text-primary" />,
            title: 'Leituras mensais e cronogramas semanais',
            description: 'Um livro por mês com metas semanais para facilitar o acompanhamento.'
        },
        {
            icon: <Vote className="w-10 h-10 text-primary" />,
            title: 'Decidimos por votação',
            description: 'Decidimos gênero e leitura por votação, assim todo mundo participa.'
        }
    ];

    return (
        <section id="como-funciona" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Title variant="subtitle" className="text-center">Como Funciona</Title>

                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            variant="secondary" 
                            className="h-72 py-6 px-6 flex flex-col items-center justify-center gap-4"
                        >
                            <div className="flex justify-center">
                                {feature.icon}
                            </div>
                            <h4 className="text-center font-medium text-text">{feature.title}</h4>
                            <p className="text-center text-sm text-text/80">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}