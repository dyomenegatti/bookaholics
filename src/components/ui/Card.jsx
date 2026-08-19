export default function Card({
    children,
    className = '',
    variant = 'default',
    ...props
}) {
    const styles = variant === 'default'
        ? 'bg-white rounded-lg hover:border-solid hover:border-2 hover:border-indigo-50 hover:shadow-md'
        : 'bg-transparent border-solid border-2 border-indigo-100 rounded-lg hover:shadow-md';

    return (
        <div className={`${styles} ${className}`} {...props}>
            { children }
        </div>
    )
}