import { BookOpen } from 'lucide-react';
import Title from '../components/ui/SectionTitle';

export default function Hero() {
    return (
        <section className="flex justify-between">
            <div className="w-1/2 flex flex-col gap-3">
                <Title>Sobre o Clube do Livro</Title>
                
                <div className="flex flex-col gap-2">
                    <p>
                        Nosso clube do livro é uma comunidade apaixonada pela leitura, onde
                        pessoas de todos os lugares se reúnem para compartilhar experiências
                        literárias únicas.
                    </p>

                    <p>
                        Acreditamos que a leitura é uma jornada melhor quando compartilhada.
                        Por isso, criamos um espaço acolhedor onde cada voz é ouvida e cada
                        opinião importa.
                    </p>

                    <p>
                        Junte-se a nós e descubra novos mundos através das páginas de grandes
                        histórias, enquanto faz parte de uma comunidade vibrante e engajada.
                    </p>
                </div>
            </div>
            
            <div className='w-1/2 flex justify-center items-center'>
                <div className="w-[180px] h-[180px] rounded-full bg-indigo-100 flex items-center justify-center">
                    <BookOpen
                        size={100}
                        className="text-indigo-600"
                    />
                </div>
            </div>
        </section>
    )
}