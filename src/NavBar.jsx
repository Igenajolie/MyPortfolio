import Logo from "./logo"
import { Icon } from '@iconify/react';

function NavBar() {
  return (
    <nav className="fixed inset-x-0 top-8 z-50 flex items-center justify-between px-10 py-4 mx-auto max-w-6xl glass rounded-[24px] transition-all duration-500 hover:shadow-2xl hover:shadow-white/5">
      <div className="flex items-center gap-3 group cursor-pointer">
        <Logo />
        <span className="text-xl font-bold tracking-tighter">AIMEE</span>
      </div>

      <div className="hidden md:flex items-center">
        <ul className="flex gap-12 list-none m-0 p-0">
          {[
            { id: 'Portfolio', label: 'Work' },
            { id: 'Resume',    label: 'Resume' },
            { id: 'Skills',    label: 'Stack' },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-xs font-bold uppercase tracking-[0.2em] text-accent-muted hover:text-white transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex gap-5">
          {[
            { icon: 'mdi:linkedin', url: 'https://linkedin.com' },
            { icon: 'mdi:github', url: 'https://github.com' }
          ].map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-muted hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Icon icon={social.icon} width="22" height="22" />
            </a>
          ))}
        </div>
        <div className="h-5 w-px bg-white/10 mx-1"></div>
        <a href="mailto:igenajolie@gmail.com" className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-white/10">
          Let's Build
        </a>
      </div>
    </nav>
  );
}

export default NavBar