import Logo from "./logo"
import { Icon } from '@iconify/react';

function NavBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-10 py-6 mx-auto max-w-7xl">

      <a href="#" className="flex items-center gap-3 group">
        <Logo />
        <span className="text-sm font-black tracking-tighter text-gray-900 uppercase">Aimee</span>
      </a>

      <ul className="hidden md:flex gap-10 list-none m-0 p-0">
        {[
          { id: 'Portfolio', label: 'Work' },
          { id: 'Resume',    label: 'Resume' },
          { id: 'Skills',    label: 'Stack' },
        ].map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-colors duration-300"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        {[
          { icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/jolie-a-igena-35a234401/' },
          { icon: 'mdi:github',   url: 'https://github.com/Jolieigena' },
        ].map((social, i) => (
          <a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
          >
            <Icon icon={social.icon} width="20" height="20" />
          </a>
        ))}

        <div className="h-4 w-px bg-black/10 mx-1" />

        <a
          href="mailto:igenajolie@gmail.com"
          className="font-mono bg-black text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] hover:bg-blue-600 transition-colors duration-300"
        >
          Let's Build
        </a>
      </div>
    </nav>
  );
}

export default NavBar
