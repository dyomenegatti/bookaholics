import Button from '../components/ui/Button';
import Logo from '../assets/Logo.svg';

export default function Header() {
    return (
        <nav className="w-full fixed top-0 left-0 bg-background shadow-sm z-50">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <a
                    href="#topo"
                    className="flex items-center justify-between h-16 gap-2"
                >
                    <img src={Logo} alt="Bookaholics" className='w-40' />
                </a>

                <div className='hidden md:block'>
                    <ul className='flex gap-6'>
                        <li className='text-text hover:cursor-pointer hover:accent-1 hover:font-medium'><a href="#como-funciona">Como Funciona</a></li>
                        <li className='text-text hover:cursor-pointer hover:accent-1 hover:font-medium'><a href="#como-participar">Como Participar</a></li>
                    </ul>
                </div>

                <div>
                    <Button
                        className="bg-primary text-white px-3 py-3 rounded-xl text-sm hover:bg-support hover:cursor-pointer"
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