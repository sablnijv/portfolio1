import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch, 
  Zap,
  Shield,
  Layers
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Разработка',
    icon: Globe,
    description: 'Создание современных интерактивных пользовательских интерфейсов',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Vue.js / Nuxt.js', level: 85 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'SASS / SCSS', level: 85 },
    ]
  },
  {
    title: 'Backend Разработка',
    icon: Database,
    description: 'Построение надежных серверных решений и API',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / Django', level: 85 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'GraphQL', level: 80 },
    ]
  },
  {
    title: 'DevOps & Инструменты',
    icon: Cloud,
    description: 'Автоматизация развертывания и управление инфраструктурой',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS / GCP', level: 80 },
      { name: 'CI/CD', level: 85 },
      { name: 'Git / GitHub', level: 95 },
      { name: 'Linux', level: 80 },
      { name: 'Nginx', level: 75 },
    ]
  },
  {
    title: 'Мобильная разработка',
    icon: Smartphone,
    description: 'Кроссплатформенные мобильные приложения',
    skills: [
      { name: 'React Native', level: 85 },
      { name: 'Flutter', level: 75 },
      { name: 'Expo', level: 80 },
      { name: 'iOS / Android', level: 70 },
    ]
  }
];

const additionalSkills = [
  { name: 'Архитектура ПО', icon: Layers },
  { name: 'Безопасность', icon: Shield },
  { name: 'Производительность', icon: Zap },
  { name: 'Контроль версий', icon: GitBranch },
];

export default function Skills() {
  return (
    <div className="min-h-screen py-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Навыки и Экспертиза
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный стек современных технологий для создания масштабируемых 
            и производительных веб-приложений
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="glass glass-hover rounded-2xl p-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-white">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1 + 0.5}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="glass glass-hover rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Дополнительные компетенции
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name}
                  className="flex flex-col items-center text-center p-4 rounded-lg glass-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Philosophy */}
        <div className="text-center glass glass-hover rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Философи�� разработки
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Верю в важность чистого кода, тестирования и непрерывного обучения. 
            Каждый проект — это возможность создать что-то значимое, что улучшит 
            жизнь пользователей. Стремлюсь к балансу между инновациями и надежностью, 
            всегда держу руку на пульсе новых технологий.
          </p>
        </div>
      </div>
    </div>
  );
}
