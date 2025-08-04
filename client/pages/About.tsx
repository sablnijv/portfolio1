import { Calendar, MapPin, Award, BookOpen, Coffee, Heart } from 'lucide-react';

const timeline = [
  {
    year: '2025',
    title: 'Full Stack Developer',
    company: 'Начало карьеры',
    description: 'Старт в веб-разработке! Интенсивное изучени�� современных технологий и создание первых проектов.'
  }
];

const achievements = [
  {
    icon: BookOpen,
    title: 'React Developer Certification',
    organization: 'Meta',
    year: '2025'
  },
  {
    icon: Award,
    title: 'JavaScript Advanced Course',
    organization: 'Coursera',
    year: '2025'
  },
  {
    icon: BookOpen,
    title: 'Node.js Backend Development',
    organization: 'Udemy',
    year: '2025'
  }
];

const interests = [
  { name: 'Open Source', icon: '🚀' },
  { name: 'Machine Learning', icon: '🤖' },
  { name: 'Блогинг', icon: '📝' },
  { name: 'Фотография', icon: '📸' },
  { name: 'Путешествия', icon: '✈️' },
  { name: 'Кофе', icon: '☕' }
];

export default function About() {
  return (
    <div className="min-h-screen py-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Обо мне
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Страстный разработчик, превращающий идеи в реальные цифровые решени��
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Bio */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass glass-hover rounded-2xl p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4d4ec03cd9ae4e62a80eb7dfdd81b8fc%2Fdb24a7b1e8c94ae1a80187784b8a6c3b?format=webp&width=160"
                    alt="Виталий Шабельный"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text">Моя история</h2>
                  <p className="text-muted-foreground text-sm mt-1">Начинающий разработчик из Москвы</p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Привет! Меня зовут Виталий Шабельный, и я начинающий Full Stack разработчик,
                  который только в 2025 году решил кардинально изменить свою жизнь и войти в
                  мир IT. Моя карьера началась с простого любопытства к тому, как работают
                  веб-сайты, и быстро переросла в настоящую страсть к созданию цифровых решений.
                </p>
                <p>
                  Несмотря на то, что я новичок в этой сфере, я подхожу к изучению с максимальной
                  серьезностью и энтузиазмом. Каждый день изучаю новые технологии, создаю проекты
                  и совершенствую свои навыки. Мой подход — учиться на практике, создавая
                  реальные приложения.
                </p>
                <p>
                  Сейчас я активно изучаю современные JavaScript фреймворки, backend-разработку
                  и облачные технологии. Хотя опыта пока немного, но ��отивация и желание
                  развиваться компенсируют это с лихвой!
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="glass glass-hover rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-8 gradient-text">Карьерный путь</h2>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div 
                    key={item.year}
                    className="flex gap-6 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-16 bg-primary/30 mt-4"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-primary">{item.year}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{item.company}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <div className="glass glass-hover rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6 text-white">Быстрые факты</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Киев , Украина</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Новичок (2025)</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="w-5 h-5 text-primary mr-3" />
                  <span className="text-muted-foreground">∞ чашек кофе</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Люблю чистый код</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="glass glass-hover rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6 text-white">Достижения</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div 
                      key={achievement.title}
                      className="p-3 rounded-lg glass-hover"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground">{achievement.organization}</p>
                          <p className="text-xs text-primary">{achievement.year}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interests */}
            <div className="glass glass-hover rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6 text-white">Интересы</h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <div 
                    key={interest.name}
                    className="p-3 rounded-lg glass-hover text-center"
                  >
                    <div className="text-2xl mb-2">{interest.icon}</div>
                    <div className="text-xs text-muted-foreground">{interest.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center glass glass-hover rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Готов к новым вызовам
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ищу интересные проекты и возможности для роста. Если у вас есть идея, 
            которую нужно воплотить в жизнь, давайте обсудим!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary rounded-lg font-semibold text-white hover:bg-primary/90 transition-all duration-200 clean-button"
          >
            Связаться со мной
          </a>
        </div>
      </div>
    </div>
  );
}
