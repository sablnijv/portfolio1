import { Construction, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="glass glass-hover rounded-2xl p-12">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Construction className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            {title}
          </h1>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {description || 'Эта страница находится в разработке. Скоро здесь появится интересный контент!'}
          </p>
          
          <p className="text-sm text-muted-foreground mb-8">
            Хотите, чтобы я заполнил эту страницу? Просто попросите меня добавить сюда контент!
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-lg font-semibold text-white hover:bg-primary/90 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
