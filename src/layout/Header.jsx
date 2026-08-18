import { BookOpen } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Header() {
    return (
        <header className='fixed top-0 left-0 z-50 w-full flex justify-between items-center px-4 py-6 shadow-md'>
            <div className='flex gap-1'>
                <BookOpen size={24} className='text-indigo-600' />
                <div className='font-medium text-gray-700 hover:text-indigo-600 hover:cursor-pointer'>Clube Bookaholics</div>
            </div>

            <nav>
                <ul className='flex gap-6'>
                    <li className='text-gray-700 hover:cursor-pointer hover:text-indigo-600 hover:font-medium'><a href="#">Sobre</a></li>
                    <li className='text-gray-700 hover:cursor-pointer hover:text-indigo-600 hover:font-medium'><a href="#">Como Funciona</a></li>
                    <li className='text-gray-700 hover:cursor-pointer hover:text-indigo-600 hover:font-medium'><a href="#">Como Participar</a></li>
                </ul>
            </nav>

            <div>
                <Button className="bg-indigo-600 text-white px-3 py-3 rounded-xl text-sm hover:bg-indigo-800 hover:cursor-pointer">
                    Entrar no clube
                </Button>
            </div>
        </header>
    )
}