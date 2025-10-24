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

  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            <a href="#portfolio" className="text-sm hover:text-accent transition-colors">Проекты</a>
            <a href="#about" className="text-sm hover:text-accent transition-colors">О нас</a>
            <a href="#contacts" className="text-sm hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90 text-white">Консультация</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-accent font-semibold text-sm">Премиум-монтаж с 2010 года</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6 leading-tight">
                Монтаж инженерной сантехники премиум-класса
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональная установка элитной сантехники от ведущих европейских производителей. 
                Безупречное качество, точность и гарантия результата.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline">
                  Смотреть проекты
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Реализованных проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Гарантия качества</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/9d497ca4-e95e-4971-82ff-1f3cc3e67f4b.jpg" 
                alt="Премиум сантехника"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2 uppercase tracking-wide">Что мы делаем</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ по монтажу и обслуживанию премиальной сантехники
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Wrench',
                title: 'Монтаж премиум-сантехники',
                description: 'Профессиональная установка элитной сантехники от Grohe, Hansgrohe, Villeroy & Boch, Duravit и других ведущих брендов'
              },
              {
                icon: 'Droplets',
                title: 'Инженерные системы',
                description: 'Проектирование и монтаж систем водоснабжения, отопления и канализации с применением современных технологий'
              },
              {
                icon: 'Home',
                title: 'Комплексное оснащение',
                description: 'Полное оснащение ванных комнат, санузлов и spa-зон "под ключ" в элитных жилых объектах'
              },
              {
                icon: 'Settings',
                title: 'Индивидуальные решения',
                description: 'Разработка и реализация нестандартных инженерных решений под специфические требования проекта'
              },
              {
                icon: 'Shield',
                title: 'Гарантийное обслуживание',
                description: 'Полное техническое сопровождение и обслуживание установленного оборудования с расширенной гарантией'
              },
              {
                icon: 'Award',
                title: 'Консультации экспертов',
                description: 'Профессиональные консультации по подбору оборудования, материалов и оптимальных технических решений'
              }
            ].map((service, idx) => (
              <Card key={idx} className="border-border hover:border-accent hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon name={service.icon} className="text-accent group-hover:text-white transition-colors" size={28} />
                  </div>
                  <CardTitle className="text-xl font-playfair text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Работаем с ведущими брендами
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Используем только оригинальное оборудование от официальных поставщиков
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['Grohe', 'Hansgrohe', 'Villeroy & Boch', 'Duravit', 'Geberit', 'Dornbracht', 'Axor', 'Kaldewei'].map((brand, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
                <p className="text-xl font-semibold">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2 uppercase tracking-wide">Портфолио</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Реализованные проекты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ в элитных жилых комплексах и частных резиденциях
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Дом в г. Истра', 
                category: 'Частный дом', 
                images: [
                  'https://cdn.poehali.dev/files/5f0b8d43-1ab7-4e19-be6a-9dfdea2ad559.jpg',
                  'https://cdn.poehali.dev/files/02a82023-c006-42d7-a18b-bd75adf1a43d.jpg'
                ]
              },
              { title: 'ЖК "Кутузовская Ривьера"', category: 'Элитное жилье', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
              { title: 'Пентхаус в Москва-Сити', category: 'Апартаменты', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
              { title: 'Загородный дом в КП "Довиль"', category: 'Коттедж', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
              { title: 'Апартаменты в ЖК "Сколково"', category: 'Современное жилье', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
              { title: 'SPA-зона в частной резиденции', category: 'Wellness', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] }
            ].map((project, idx) => (
              <div key={idx} className="group relative h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer" onClick={() => { setSelectedProject(idx); setCurrentImageIndex(0); }}>
                <img 
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <Icon name="Images" size={16} className="inline mr-1" />
                    {project.images.length}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-accent font-semibold mb-2">{project.category}</p>
                  <h3 className="text-2xl font-playfair font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedProject(null)}
            >
              <Icon name="X" size={24} />
            </Button>
            
            <div className="relative bg-white rounded-xl overflow-hidden">
              <img 
                src={[
                  { 
                    title: 'Дом в г. Истра', 
                    category: 'Частный дом', 
                    images: [
                      'https://cdn.poehali.dev/files/5f0b8d43-1ab7-4e19-be6a-9dfdea2ad559.jpg',
                      'https://cdn.poehali.dev/files/02a82023-c006-42d7-a18b-bd75adf1a43d.jpg'
                    ]
                  },
                  { title: 'ЖК "Кутузовская Ривьера"', category: 'Элитное жилье', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                  { title: 'Пентхаус в Москва-Сити', category: 'Апартаменты', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                  { title: 'Загородный дом в КП "Довиль"', category: 'Коттедж', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                  { title: 'Апартаменты в ЖК "Сколково"', category: 'Современное жилье', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                  { title: 'SPA-зона в частной резиденции', category: 'Wellness', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] }
                ][selectedProject].images[currentImageIndex]}
                alt="Project image"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {[
                { 
                  title: 'Дом в г. Истра', 
                  category: 'Частный дом', 
                  images: [
                    'https://cdn.poehali.dev/files/5f0b8d43-1ab7-4e19-be6a-9dfdea2ad559.jpg',
                    'https://cdn.poehali.dev/files/02a82023-c006-42d7-a18b-bd75adf1a43d.jpg'
                  ]
                },
                { title: 'ЖК "Кутузовская Ривьера"', category: 'Элитное жилье', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                { title: 'Пентхаус в Москва-Сити', category: 'Апартаменты', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                { title: 'Загородный дом в КП "Довиль"', category: 'Коттедж', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                { title: 'Апартаменты в ЖК "Сколково"', category: 'Современное жилье', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                { title: 'SPA-зона в частной резиденции', category: 'Wellness', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] }
              ][selectedProject].images.length > 1 && (
                <>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                    onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : [
                      { 
                        title: 'Дом в г. Истра', 
                        category: 'Частный дом', 
                        images: [
                          'https://cdn.poehali.dev/files/5f0b8d43-1ab7-4e19-be6a-9dfdea2ad559.jpg',
                          'https://cdn.poehali.dev/files/02a82023-c006-42d7-a18b-bd75adf1a43d.jpg'
                        ]
                      },
                      { title: 'ЖК "Кутузовская Ривьера"', category: 'Элитное жилье', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                      { title: 'Пентхаус в Москва-Сити', category: 'Апартаменты', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                      { title: 'Загородный дом в КП "Довиль"', category: 'Коттедж', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                      { title: 'Апартаменты в ЖК "Сколково"', category: 'Современное жилье', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                      { title: 'SPA-зона в частной резиденции', category: 'Wellness', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] }
                    ][selectedProject].images.length - 1)}
                  >
                    <Icon name="ChevronLeft" size={24} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                    onClick={() => setCurrentImageIndex(prev => prev < [
                      { 
                        title: 'Дом в г. Истра', 
                        category: 'Частный дом', 
                        images: [
                          'https://cdn.poehali.dev/files/5f0b8d43-1ab7-4e19-be6a-9dfdea2ad559.jpg',
                          'https://cdn.poehali.dev/files/02a82023-c006-42d7-a18b-bd75adf1a43d.jpg'
                        ]
                      },
                      { title: 'ЖК "Кутузовская Ривьера"', category: 'Элитное жилье', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                      { title: 'Пентхаус в Москва-Сити', category: 'Апартаменты', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                      { title: 'Загородный дом в КП "Довиль"', category: 'Коттедж', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                      { title: 'Апартаменты в ЖК "Сколково"', category: 'Современное жилье', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                      { title: 'SPA-зона в частной резиденции', category: 'Wellness', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] }
                    ][selectedProject].images.length - 1 ? prev + 1 : 0)}
                  >
                    <Icon name="ChevronRight" size={24} />
                  </Button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-sm font-semibold">
                    {currentImageIndex + 1} / {[
                      { 
                        title: 'Дом в г. Истра', 
                        category: 'Частный дом', 
                        images: [
                          'https://cdn.poehali.dev/files/5f0b8d43-1ab7-4e19-be6a-9dfdea2ad559.jpg',
                          'https://cdn.poehali.dev/files/02a82023-c006-42d7-a18b-bd75adf1a43d.jpg'
                        ]
                      },
                      { title: 'ЖК "Кутузовская Ривьера"', category: 'Элитное жилье', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                      { title: 'Пентхаус в Москва-Сити', category: 'Апартаменты', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                      { title: 'Загородный дом в КП "Довиль"', category: 'Коттедж', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                      { title: 'Апартаменты в ЖК "Сколково"', category: 'Современное жилье', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] },
                      { title: 'SPA-зона в частной резиденции', category: 'Wellness', images: ['https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/107a7fd5-4abf-421c-9755-77e32a3bf6e9.jpg'] }
                    ][selectedProject].images.length}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold mb-2 uppercase tracking-wide">О компании</p>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Эксперты в монтаже премиум-сантехники
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                BRAVAHOLZ Engineering — специализированная монтажная организация с 15-летним опытом работы 
                в сегменте элитной недвижимости. Мы выполняем полный комплекс работ по монтажу инженерной 
                сантехники премиум-класса.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Наша команда состоит из высококвалифицированных специалистов, прошедших обучение 
                у ведущих европейских производителей. Мы работаем только с оригинальным оборудованием 
                и гарантируем безупречное качество выполнения всех работ.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Сертифицированные специалисты</h4>
                    <p className="text-sm text-muted-foreground">Официальные партнеры ведущих брендов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Гарантия качества</h4>
                    <p className="text-sm text-muted-foreground">Расширенная гарантия на все работы</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Точные сроки</h4>
                    <p className="text-sm text-muted-foreground">Четкое планирование и контроль</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Премиум-сервис</h4>
                    <p className="text-sm text-muted-foreground">Индивидуальный подход к каждому клиенту</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/76e57fc3-0e31-48d9-9c2a-e3c19fea58ba/files/4916e02b-5aaf-4b69-92f7-9966b7068df1.jpg"
                alt="Наша команда"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-lg text-white/80">Завершенных проектов</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">15</div>
              <p className="text-lg text-white/80">Лет опыта</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <p className="text-lg text-white/80">Специалистов в команде</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <p className="text-lg text-white/80">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2 uppercase tracking-wide">Свяжитесь с нами</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Получить консультацию
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair">Отправить запрос</CardTitle>
                  <CardDescription>Мы ответим в течение 1 часа в рабочее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input 
                        placeholder="Иван Петров"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input 
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea 
                        placeholder="Опишите ваш проект..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="min-h-32"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white">
                      Отправить запрос
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <a href="tel:+79852262840" className="text-muted-foreground hover:text-accent transition-colors text-lg">
                    +7-985-226-28-40
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a href="mailto:sale@bravaholz.ru" className="text-muted-foreground hover:text-accent transition-colors text-lg">
                    sale@bravaholz.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Офис</h3>
                  <p className="text-muted-foreground text-lg">
                    Москва, Рублевское шоссе
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00</p>
                  <p className="text-muted-foreground">Сб-Вс: по договоренности</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/fc98d253-fb11-4213-82c6-2b1f1052fe75.png" 
                alt="BRAVAHOLZ" 
                className="h-8 mb-2 brightness-0 invert"
              />
              <p className="text-sm font-bold tracking-widest mb-4">ENGINEERING</p>
              <p className="text-white/70 text-sm">
                Монтаж инженерной сантехники премиум-класса с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#services" className="hover:text-accent transition-colors">Монтаж сантехники</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Инженерные системы</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Комплексное оснащение</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Обслуживание</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Компания</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#about" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#portfolio" className="hover:text-accent transition-colors">Проекты</a></li>
                <li><a href="#contacts" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>+7-985-226-28-40</li>
                <li>sale@bravaholz.ru</li>
                <li>Москва, Рублевское шоссе</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>© 2024 BRAVAHOLZ Engineering. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}