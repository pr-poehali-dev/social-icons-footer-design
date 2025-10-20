import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      title: "AI, IoT, Vision",
      description: "Интеграция искусственного интеллекта и IoT устройств в единую платформу",
      icon: "Cpu",
      color: "bg-primary"
    },
    {
      title: "Вариативность источников данных",
      description: "Подключение любых источников данных без ограничений",
      icon: "Database",
      color: "bg-accent"
    },
    {
      title: "Работа в реалтайм",
      description: "Мгновенная обработка данных и получение результатов",
      icon: "Zap",
      color: "bg-secondary"
    },
    {
      title: "No code/low code",
      description: "Создание решений без глубоких знаний программирования",
      icon: "Code2",
      color: "bg-primary"
    }
  ];

  const solutions = [
    {
      title: "Репозиторий",
      description: "Централизованное хранилище всех компонентов и решений",
      icon: "FolderGit2"
    },
    {
      title: "Мультиязычность разработки",
      description: "Поддержка различных языков программирования в рамках одной платформы",
      icon: "Globe"
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: "Github", url: "#" },
    { name: "Telegram", icon: "Send", url: "#" },
    { name: "Twitter", icon: "Twitter", url: "#" },
    { name: "LinkedIn", icon: "Linkedin", url: "#" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Layers" className="text-primary-foreground" size={24} />
              </div>
              <span className="text-xl font-bold">OSMOVIEW</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#platform" className="text-sm font-medium hover:text-primary transition-colors">Платформа</a>
              <a href="#solutions" className="text-sm font-medium hover:text-primary transition-colors">Решения</a>
              <a href="#news" className="text-sm font-medium hover:text-primary transition-colors">Новости</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>

            <Button className="hidden md:flex">Войти</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </nav>
        </div>
      </header>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                AI, IoT, Vision<br />
                <span className="text-primary">+ всё в одной платформе</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Объединяем искусственный интеллект, интернет вещей и машинное зрение 
                в единой экосистеме для решения бизнес-задач любой сложности
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base">
                  Начать работу
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Узнать больше
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
              <img 
                src="https://cdn.poehali.dev/files/750d24cf-5414-46d9-96e4-e1eb6cd650d7.jpg" 
                alt="3D Character" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Преимущества платформы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мощные инструменты для создания интеллектуальных решений
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={feature.icon} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className="p-8 bg-gradient-to-br from-card to-secondary/5 hover:shadow-2xl transition-all duration-300 border-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Icon name={solution.icon} className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground text-lg">{solution.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Новости</h2>
            <p className="text-lg text-muted-foreground">Последние обновления и события</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">15 октября 2024</div>
                  <h3 className="text-xl font-bold mb-3">Новая версия платформы</h3>
                  <p className="text-muted-foreground mb-4">
                    Представляем обновлённый интерфейс с улучшенной производительностью
                  </p>
                  <Button variant="link" className="p-0">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <Card className="p-12 bg-gradient-to-br from-secondary to-secondary/50 border-2 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Давайте поговорим о вашем проекте
              </h2>
              <p className="text-xl text-white/90">
                Наши эксперты помогут найти оптимальное решение для вашего бизнеса
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90">
                  Связаться с нами
                  <Icon name="MessageCircle" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Смотреть демо
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Layers" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">OSMOVIEW</span>
              </div>
              <p className="text-white/70">
                Инновационная платформа для объединения AI, IoT и Vision технологий
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Платформа</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Решения</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Технологии</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Партнёры</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Ресурсы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Поддержка</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} className="text-white/70" />
                  <a href="mailto:info@osmoview.com" className="text-white/70 hover:text-white transition-colors">
                    info@osmoview.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} className="text-white/70" />
                  <span className="text-white/70">+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} className="text-white/70" />
                  <span className="text-white/70">Москва, Россия</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-white/70 text-sm">
                © 2024 OSMOVIEW. Все права защищены
              </div>

              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={20} className="text-white" />
                  </a>
                ))}
              </div>

              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/70 hover:text-white transition-colors">Политика конфиденциальности</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
