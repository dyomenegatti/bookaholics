export default function Title({
    children,
    className = '',
    variant = 'head',
    ...props
}) {
    const Tag = variant === 'head' ? 'h1' : 'h3';

    const styles = variant === 'head'
        ? 'text-2xl font-semibold text-support'
        : 'text-lg font-medium text-primary';

    return (
        <Tag className={`${styles} ${className}`} {...props}>
            {children}
        </Tag>
    );
}