import { MapPin, Clock, Github, Linkedin, Twitter } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Локация',
    value: 'Москва, Россия',
    href: null
  },
  {
    icon: Clock,
    label: 'Часы работы',
    value: 'Пн-Пт: 9:00-18:00',
    href: null
  }
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
];

export default function Contact() {
  return (
    <div className="min-h-screen py-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Связаться со мной
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Готов обсудить ваш проект или ��озможности сотрудничества.
            Пишите в Telegram — отвечаю быстро!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Telegram Contact */}
          <div className="lg:col-span-2">
            <div className="glass glass-hover rounded-2xl p-8 text-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                </svg>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-white">
                Telegram
              </h2>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Самый быстрый способ связаться со мной. Обычно отвечаю в течение часа
                в рабочее время. Готов обсудить любые вопросы по разработке!
              </p>

              <div className="space-y-4 mb-8">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Мой Telegram:</div>
                  <div className="text-2xl font-bold text-primary">@vitaly_dev</div>
                </div>
              </div>

              <a
                href="https://t.me/vitaly_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary rounded-lg font-semibold text-white hover:bg-primary/90 transition-all duration-200 clean-button text-lg"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                </svg>
                Написать в Telegram
              </a>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Онлайн</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Обычно отвечаю в течение 1-2 часов
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass glass-hover rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6 text-white">
                Контактная информация
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center p-3 rounded-lg glass-hover transition-all">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{info.label}</div>
                        <div className="text-sm font-medium text-white">{info.value}</div>
                      </div>
                    </div>
                  );
                  
                  return info.href ? (
                    <a key={info.label} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass glass-hover rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6 text-white">
                Социальные сети
              </h3>
              
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg glass-hover transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-white">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="glass glass-hover rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Статус доступности
              </h3>
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white font-medium">Доступен для проектов</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Обычно отвечаю в течение 24 часов
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
