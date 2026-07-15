
function Logo() {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center bg-white rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
      <span className="text-black font-black text-lg -rotate-12 group-hover:rotate-0 transition-transform duration-500">A.</span>
      <div className="absolute inset-0 border border-white rounded-lg -translate-x-1 translate-y-1 z-[-1] opacity-50"></div>
    </div>
  );
}

export default Logo;

