import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full glass opacity-20 animate-float"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full glass opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full glass opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10">
            {/* Greeting */}
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-4">
                Добро пожаловать в мой мир разработки
              </span>
            </div>

          

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Начинающий Full Stack разработчик, изучающий современные технологии
              и создающий веб-приложения в 2025 году
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-full glass text-sm font-medium text-white border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Link
                to="/projects"
                className="px-8 py-4 bg-primary rounded-lg font-semibold text-white hover:bg-primary/90 transition-all duration-200 clean-button flex items-center gap-2"
              >
                Посмотреть проекты
                <ExternalLink className="w-4 h-4" />
              </Link>
              
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="px-8 py-4 glass glass-hover rounded-lg font-semibold text-white flex items-center gap-2"
              >
                Скачать резюме
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass glass-hover rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                О разработчике
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Начинающий Full Stack разработчик, который в 2025 году решил кардинально
                изменить свою карьеру и войти в мир IT. Активно изучаю современные технологии
                и создаю учебные проекты.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Моя цель — стать профессиональным разработчиком и создавать полезные
                приложения, которые решают реальные проблемы пользователей.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Узнать больше
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass glass-hover rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
              <div className="glass glass-hover rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">2025</div>
                <div className="text-sm text-muted-foreground">Год начала</div>
              </div>
              <div className="glass glass-hover rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Технологи��</div>
              </div>
              <div className="glass glass-hover rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Мотивация</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
