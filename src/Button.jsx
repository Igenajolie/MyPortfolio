function Button({ label, onClick, variant = 'primary', className = '' }) {
  const baseClasses =
    'px-6 py-3 text-sm font-bold tracking-widest uppercase rounded-full cursor-pointer transition-all duration-300 active:scale-95';

  const variants = {
    primary: 'bg-white text-black hover:bg-gray-200',
    outline: 'bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5',
    ghost: 'bg-transparent text-accent-muted hover:text-white',
    accent: 'bg-gradient-to-r from-white to-gray-400 text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant] || variants.primary} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;