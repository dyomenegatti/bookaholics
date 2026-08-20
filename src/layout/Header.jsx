import { BookOpen, Link } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Header() {
    return (
        <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <a
                    href="#topo"
                    className="flex items-center justify-between h-16 gap-2"
                >
                    <BookOpen className="w-8 h-8 text-indigo-600" />
                    <span className="text-indigo-900">Clube do Livro</span>
                </a>

                <div className='hidden md:block'>
                    <ul className='flex gap-6'>
                        <li className='text-gray-700 hover:cursor-pointer hover:text-indigo-600 hover:font-medium'><a href="#como-funciona">Como Funciona</a></li>
                        <li className='text-gray-700 hover:cursor-pointer hover:text-indigo-600 hover:font-medium'><a href="#como-participar">Como Participar</a></li>
                    </ul>
                </div>

                <div>
                    <Button
                        className="bg-indigo-600 text-white px-3 py-3 rounded-xl text-sm hover:bg-indigo-800 hover:cursor-pointer"
                        onClick={() => {
                            document
                                .getElementById("como-participar")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Entrar no clube
                    </Button>
                </div>
            </div>
        </nav>
    )
}