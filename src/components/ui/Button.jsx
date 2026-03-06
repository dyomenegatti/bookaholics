export default function Button({ 
    children,
    type = "button", 
    onClick = () => {}, 
    fullWidth = false,
    endIcon,
    ariaLabel = "Botão",
    title
}) {
    return (
        <button
            className={
                `px-6 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-800 transition duration-300 ${fullWidth ? 'w-full' : ''}`
            }
            type={type}
            onClick={onClick}
            aria-label={ariaLabel}
            title={title}
        >
            { children }
            { endIcon && <span className="ml-2">{ endIcon }</span>}
        </button>
    )
};