import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="glass glass-hover rounded-2xl p-12">
          <div className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-destructive" />
          </div>

          <h1 className="text-6xl font-bold mb-4 gradient-text">
            404
          </h1>

          <h2 className="text-2xl font-semibold mb-4 text-white">
            Страница не найдена
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            К сожалению, страница по адресу <code className="px-2 py-1 bg-black/20 rounded text-primary">{location.pathname}</code> не существует.
            Возможно, она была перемещена или удалена.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary rounded-lg font-semibold text-white hover:bg-primary/90 transition-all duration-300 glow-accent"
          >
            <Home className="w-4 h-4" />
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
