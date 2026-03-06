import Button from "../ui/Button";
import NavLinks from "./NavLink";
import Logo from "../ui/Logo";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const links = [
    'Sobre', 
    'Como Funciona',
    'Como Participar',
];

export default function Header() {
    function handleClick() {
        console.log('olá');
    }

    function linkClick() {
        console.log('linkkk');
    }

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
            <div className="flex justify-between items-center gap-3 min-w-lg px-8 py-4">
                <Logo />

                <NavLinks 
                    links={links}
                    onClick={linkClick}
                />

                <Button 
                    children='Teste'
                    onClick={handleClick}
                    ariaLabel="Botão para participar do clube"
                    title='Participe do clube'
                    endIcon={<ArrowForwardIcon />}
                />
            </div>
        </nav>
    );
};