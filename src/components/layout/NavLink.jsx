
export default function NavLinks({ links, onClick }) {
    return (
        <ul className="flex gap-4">
            { links.map(link => 
                <li 
                    className="cursor-pointer font-medium"
                    key={link}
                    onClick={onClick}
                >{ link }</li>) 
            }
        </ul>
    )
}