import Title from '../components/ui/SectionTitle';
import Icone from '../assets/Icone.svg';

export default function Hero() {
    return (
        <section id="sobre" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Title variant="subtitle">Sobre o Clube do Livro</Title>

                        <p className="text-text leading-relaxed mb-4">
                            Nosso clube do livro é uma comunidade apaixonada pela leitura, onde pessoas de todos os lugares se reúnem para compartilhar experiências literárias únicas.
                        </p>
                        <p className="text-text leading-relaxed mb-4">
                            Acreditamos que a leitura é uma jornada melhor quando compartilhada. Por isso, criamos um espaço acolhedor onde cada voz é ouvida e cada opinião importa.
                        </p>
                        <p className="text-text leading-relaxed">
                            Junte-se a nós e descubra novos mundos através das páginas de grandes histórias, enquanto faz parte de uma comunidade vibrante e engajada.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-accent-2/70 rounded-full p-12">
                        <img src={Icone} alt="Bookaholics" className='w-50' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}