import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  Code, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink 
} from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { name: 'Главная', href: '/', icon: Home },
  { name: 'О себе', href: '/about', icon: User },
  { name: 'Навыки', href: '/skills', icon: Code },
  { name: 'Проекты', href: '/projects', icon: Briefcase },
  { name: 'Контакты', href: '/contact', icon: Mail },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
];

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 w-64 h-full">
        <div className="h-full p-6 glass border-r border-white/20 backdrop-blur-glass-strong">
          {/* Profile Section */}
          <div className="mb-8">
            <div className="w-16 h-16 rounded-full glass mb-4 overflow-hidden border-2 border-primary/20">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4d4ec03cd9ae4e62a80eb7dfdd81b8fc%2Fdb24a7b1e8c94ae1a80187784b8a6c3b?format=webp&width=128"
                alt="Виталий Шабельный"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-1">
              Виталий Шабельный
            </h2>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`
                        flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                        ${isActive
                          ? 'bg-primary/15 text-primary border border-primary/30 shadow-subtle'
                          : 'text-muted-foreground hover:text-white hover:bg-white/5'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="mt-auto">
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass-hover text-muted-foreground hover:text-primary transition-colors"
                    title={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        <div className="min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
}
