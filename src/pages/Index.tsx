import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <img 
              src="https://cdn.poehali.dev/files/fc98d253-fb11-4213-82c6-2b1f1052fe75.png" 
              alt="BRAVAHOLZ" 
              className="h-7 md:h-9"
            />
            <span className="text-xs md:text-sm font-bold text-primary tracking-widest mt-1">ENGINEERING</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-sm hover:text-accent transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm hover:text-accent transition-colors">Портфолио</a>
            <a href="#about" className="text-sm hover:text-accent transition-colors">О компании</a>
            <a href="#advantages" className="text-sm hover:text-accent transition-colors">Преимущества</a>
            <a href="#partners" className="text-sm hover:text-accent transition-colors">Партнёры</a>
            <a href="#contacts" className="text-sm hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">Консультация</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-6xl font-playfair font-bold text-primary mb-6 leading-tight">
                Premium Plumbing Solutions
              </h2>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Изысканное мастерство в каждой детали
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наша команда устанавливает высококлассную сантехнику от ведущих производителей. 
                Экспертное пространство гарантирует соблюдение высочайших стандартов.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                  Наши услуги
                </Button>
                <Button size="lg" variant="outline">
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/9d497ca4-e95e-4971-82ff-1f3cc3e67f4b.jpg" 
                alt="Luxury bathroom interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">Наши услуги</p>
            <h2 className="text-5xl font-playfair font-bold text-primary mb-4">
              Премиальные решения
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Индивидуальный подход и персональный сервис для каждого клиента
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Droplets',
                title: 'Монтаж премиум-сантехники',
                description: 'Установка элитной сантехники от ведущих европейских производителей с гарантией качества'
              },
              {
                icon: 'Wrench',
                title: 'Индивидуальные решения',
                description: 'Разработка и реализация уникальных проектов под ваши требования и пожелания'
              },
              {
                icon: 'Shield',
                title: 'Гарантийное обслуживание',
                description: 'Полное сопровождение и техническая поддержка на всех этапах эксплуатации'
              },
              {
                icon: 'Sparkles',
                title: 'Дизайнерские решения',
                description: 'Консультации по подбору сантехники в соответствии с интерьером'
              },
              {
                icon: 'Clock',
                title: 'Соблюдение сроков',
                description: 'Четкое планирование и выполнение работ точно в установленные сроки'
              },
              {
                icon: 'Award',
                title: 'Премиум качество',
                description: 'Использование только оригинальных материалов и комплектующих'
              }
            ].map((service, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-accent" size={24} />
                  </div>
                  <CardTitle className="text-xl font-playfair">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">Портфолио</p>
            <h2 className="text-5xl font-playfair font-bold text-primary mb-4">
              Реализованные проекты
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative h-80 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg"
                  alt={`Project ${item}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-playfair font-bold mb-2">Проект {item}</h3>
                    <p className="text-sm">Премиум монтаж сантехники</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/4916e02b-5aaf-4b69-92f7-9966b7068df1.jpg"
                alt="Premium tools"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-accent font-medium mb-2">О компании</p>
              <h2 className="text-5xl font-playfair font-bold text-primary mb-6">
                Эксперты премиум-класса
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы специализируемся на монтаже инженерной сантехники премиум-класса. 
                Наш опыт и профессионализм позволяют реализовывать проекты любой сложности, 
                гарантируя безупречное качество и долговечность.
              </p>
              <div className="space-y-4">
                {[
                  'Более 15 лет на рынке премиум-услуг',
                  'Сертифицированные специалисты',
                  'Работа с эксклюзивными брендами',
                  'Индивидуальный подход к каждому проекту'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold mb-4">
              Наши преимущества
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Почему клиенты выбирают нас для своих премиум-проектов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Лет опыта' },
              { number: '500+', label: 'Реализованных проектов' },
              { number: '100%', label: 'Гарантия качества' },
              { number: '24/7', label: 'Поддержка клиентов' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-playfair font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">Партнёры</p>
            <h2 className="text-5xl font-playfair font-bold text-primary mb-4">
              Премиальные бренды
            </h2>
            <p className="text-lg text-muted-foreground">
              Работаем только с ведущими производителями
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Grohe', 'Hansgrohe', 'Villeroy & Boch', 'Duravit', 'Geberit', 'Kohler'].map((brand, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xl font-semibold text-primary">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-accent font-medium mb-2">Контакты</p>
              <h2 className="text-5xl font-playfair font-bold text-primary mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-muted-foreground">
                Готовы обсудить ваш проект
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7-985-226-28-40</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@premium-plumbing.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">Москва, ул. Примерная, 123</p>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair">Оставьте заявку</CardTitle>
                  <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Input 
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Ваше сообщение"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-primary">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex flex-col mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/fc98d253-fb11-4213-82c6-2b1f1052fe75.png" 
                  alt="BRAVAHOLZ" 
                  className="h-10 brightness-0 invert"
                />
                <span className="text-sm font-bold text-white tracking-widest mt-2">ENGINEERING</span>
              </div>
              <p className="text-white/70">
                Эксклюзивные решения в области монтажа премиум-сантехники
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-accent transition-colors">Услуги</a></li>
                <li><a href="#portfolio" className="hover:text-accent transition-colors">Портфолио</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">О компании</a></li>
                <li><a href="#contacts" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7-985-226-28-40</li>
                <li>info@premium-plumbing.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2024 Premium Plumbing Solutions. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}