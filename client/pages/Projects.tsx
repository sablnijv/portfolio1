import { ExternalLink, Github, Star, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Todo List приложение',
    description: 'Простое приложение для управления задачами с возможностью добавления, удаления и отметки выполненных дел.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    stats: { stars: 12, views: 250 }
  },
  {
    id: 2,
    title: 'Калькул��тор',
    description: 'Интерактивный калькулятор с базовыми математическими операциями и красивым дизайном.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    stats: { stars: 8, views: 180 }
  },
  {
    id: 3,
    title: 'Лендинг кофейни',
    description: 'Красивый лендинг для местной кофейни с адаптивным дизайном и плавными анимациями.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    stats: { stars: 15, views: 320 }
  },
  {
    id: 4,
    title: 'Игра "Камень, ножницы, бумага"',
    description: 'Простая браузерная игра с счетчиком очков и красивым интерфейсом.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    stats: { stars: 7, views: 150 }
  },
  {
    id: 5,
    title: 'Генератор цитат',
    description: 'Приложение для генерации мотивационных цитат с возможностью поделиться в социальных сетях.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    stats: { stars: 9, views: 200 }
  },
  {
    id: 6,
    title: 'Цифровые часы',
    description: 'Стильные цифровые часы с возможностью переключения между форматами времени.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    stats: { stars: 5, views: 120 }
  },
  {
    id: 7,
    title: 'Погодное приложение',
    description: 'Простое приложение для просмотра погоды с использованием внешнего API.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    stats: { stars: 18, views: 380 }
  },
  {
    id: 8,
    title: 'Форма обратной связи',
    description: 'Красивая контактная форма с валидацией и отправкой сообщений.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    stats: { stars: 6, views: 140 }
  },
  {
    id: 9,
    title: 'Галерея изображений',
    description: 'Адаптивная галерея с модальными окнами и возможностью фильтрации по категориям.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    stats: { stars: 11, views: 220 }
  },
  {
    id: 10,
    title: 'Таймер Pomodoro',
    description: 'Простой таймер для техники Pomodoro с настройками времени работы и отдыха.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    stats: { stars: 14, views: 280 }
  },
  {
    id: 11,
    title: 'QR код генератор',
    description: 'Инструмент для создания QR кодов из текста или ссылок с возможностью скачивания.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript', 'QR API'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    stats: { stars: 10, views: 190 }
  },
  {
    id: 12,
    title: 'Конвертер валют',
    description: 'Простой конвертер валют с актуальными курсами из внешнего API.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript', 'Exchange API'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    stats: { stars: 13, views: 260 }
  },
  {
    id: 13,
    title: 'Список покупок',
    description: 'Удобное приложение для создания и управления списками покупок с local storage.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    stats: { stars: 8, views: 170 }
  },
  {
    id: 14,
    title: 'Игра "Угадай число"',
    description: 'Простая игра на угадывание числа с подсказками и счетчиком попыток.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    stats: { stars: 16, views: 340 }
  },
  {
    id: 15,
    title: 'Личный блог',
    description: 'Простой статический блог с адаптивным дизайном и темной темой.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    stats: { stars: 12, views: 230 }
  }
];

const featuredProjects = projects.filter(p => p.featured);
const otherProjects = projects.filter(p => !p.featured);

export default function Projects() {
  return (
    <div className="min-h-screen py-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Портфолио проектов
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Избранные работы, демонстрирующие мой опыт в создании 
            современных веб-приложений и мобильных решений
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Ключевые проекты</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="glass glass-hover rounded-2xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg opacity-80"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.stats.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {project.stats.views}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass-hover rounded-lg text-sm font-medium text-white transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Код
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg text-sm font-medium text-white hover:bg-primary/90 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Демо
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-white">Другие проекты</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={project.id}
                className="glass glass-hover rounded-xl p-6 animate-fade-in"
                style={{ animationDelay: `${(index + featuredProjects.length) * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Star className="w-3 h-3" />
                    {project.stats.stars}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-muted-foreground text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 glass-hover rounded text-xs font-medium text-white transition-all"
                  >
                    <Github className="w-3 h-3" />
                    Код
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 bg-primary/20 rounded text-xs font-medium text-primary transition-all hover:bg-primary/30"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Демо
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
