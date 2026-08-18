export default function Button({
  children,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={className}
      {...props}
    >
      {loading ? 'Carregando...' : children}
    </button>
  );
}