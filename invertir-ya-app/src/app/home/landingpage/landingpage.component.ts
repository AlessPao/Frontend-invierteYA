import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

interface apps {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  link: string;
}

interface quicklinks {
  id: number;
  title: string;
  link: string;
}

interface demos {
  id: number;
  name: string;
  subtext?: string;
  url: string;
  imgSrc: string;
}

interface testimonials {
  id: number;
  name: string;
  subtext: string;
  imgSrc: string;
}

interface features {
  id: number;
  icon: string;
  title: string;
  subtext: string;
  color: string;
}

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {
  @Input() showToggle = true;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  options = this.settings.getOptions();

  constructor(
    private settings: CoreService,
    private scroller: ViewportScroller
  ) {}

  // scroll to demos
  gotoDemos() {
    this.scroller.scrollToAnchor('demos');
  }

  apps: apps[] = [
    // {
    //   id: 1,
    //   img: '/assets/images/svgs/icon-dd-chat.svg',
    //   title: 'Chat Application',
    //   subtitle: 'Messages & Emails',
    //   link: '/apps/chat',
    // },
    // {
    //   id: 2,
    //   img: '/assets/images/svgs/icon-dd-cart.svg',
    //   title: 'eCommerce App',
    //   subtitle: 'Buy a Product',
    //   link: '/apps/email/inbox',
    // },
    // {
    //   id: 3,
    //   img: '/assets/images/svgs/icon-dd-invoice.svg',
    //   title: 'Invoice App',
    //   subtitle: 'Get latest invoice',
    //   link: '/apps/invoice',
    // },
    // {
    //   id: 4,
    //   img: '/assets/images/svgs/icon-dd-date.svg',
    //   title: 'Calendar App',
    //   subtitle: 'Get Dates',
    //   link: '/apps/calendar',
    // },
    {
      id: 5,
      img: '/assets/images/svgs/icon-dd-mobile.svg',
      title: 'Calculadora',
      subtitle: 'Fórmula estándar',
      link: '/calculator',
    },
    // {
    //   id: 6,
    //   img: '/assets/images/svgs/icon-dd-lifebuoy.svg',
    //   title: 'Tickets App',
    //   subtitle: 'Create new ticket',
    //   link: '/apps/tickets',
    // },
    // {
    //   id: 7,
    //   img: '/assets/images/svgs/icon-dd-message-box.svg',
    //   title: 'Email App',
    //   subtitle: 'Get new emails',
    //   link: '/apps/email/inbox',
    // },
    // {
    //   id: 8,
    //   img: '/assets/images/svgs/icon-dd-application.svg',
    //   title: 'Courses',
    //   subtitle: 'Create new course',
    //   link: '/apps/courses',
    // },
  ];

  demos: demos[] = [
    {
      id: 1,
      imgSrc: 'https://i.ytimg.com/vi/Vg4CL6GmvrU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB1zw0bok5DRdGlRKrZSndF0e2lOQ',
      name: '¿Cómo invertir tu Dinero?',
      subtext: 'Guía Definitiva 2024',
      url: 'https://www.youtube.com/watch?v=v5uETuj42CQ',
    },
    {
      id: 2,
      imgSrc: 'https://i.ytimg.com/vi/8TKoNEghp8A/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBV-9N9XweJ5geihdxZMkby2xQ_YQ',
      name: 'La Fórmula para Invertir',
      subtext: 'Guía para principiantes',
      url: 'https://www.youtube.com/watch?v=fpRfhWUfu0c',
    },
    {
      id: 5,
      imgSrc: 'https://i.ytimg.com/vi/fpRfhWUfu0c/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCz3f3OWnCYb-ugMJPWP0i8N9d90Q',
      name: 'Deja de invertir en fondos así',
      subtext: 'Comienza aquí',
      url: 'https://www.youtube.com/watch?v=-fiZ7JgVwOc',
    },
    {
      id: 3,
      imgSrc: 'https://i.ytimg.com/vi/Yvl-tIf7weo/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLASxQ4gRquz7Oofpn9YRqwggVygVQ',
      name: 'Lo mejor de Invertir',
      subtext: '#Finanzas #economia',
      url: 'https://www.youtube.com/watch?v=Yvl-tIf7weo',
    },
    {
      id: 4,
      imgSrc: 'https://i.ytimg.com/vi/eQmH085CCUk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCJz9I_TR1CPunwRSfZ93b3EhZXiQ',
      name: '¿Cómo invertir en la bolsa?',
      subtext: 'No necesitas experiencia',
      url: 'https://www.youtube.com/watch?v=eQmH085CCUk',
    },
    {
      id: 5,
      imgSrc: 'https://i.ytimg.com/vi/uqhyjqdsrdY/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBaKDkwDw==&rs=AOn4CLBeXHr1awVIPNotRGR1cCH6v3TcOw',
      name: '¿Cómo usar tu dinero con InvertirYa!?',
      subtext: 'PRINCIPANTE #2024',
      url: 'https://www.youtube.com/watch?v=v6CzSkeh7F8',
    },
  ];

  appdemos: demos[] = [
    {
      id: 1,
      imgSrc: '/assets/images/landingpage/apps/app-calendar.jpg',
      name: 'Calendar',
      subtext: 'Application',
      url: 'https://spike-angular-pro-main.netlify.app/apps/calendar',
    },
    {
      id: 2,
      imgSrc: '/assets/images/landingpage/apps/app-chat.jpg',
      name: 'Chat',
      subtext: 'Application',
      url: 'https://spike-angular-pro-main.netlify.app/apps/chat',
    },
    {
      id: 3,
      imgSrc: '/assets/images/landingpage/apps/app-contact.jpg',
      name: 'Contact',
      subtext: 'Application',
      url: 'https://spike-angular-pro-main.netlify.app/apps/contacts',
    },
    {
      id: 4,
      imgSrc: '/assets/images/landingpage/apps/app-email.jpg',
      name: 'Email',
      subtext: 'Application',
      url: 'https://spike-angular-pro-main.netlify.app/apps/email/inbox',
    },
    {
      id: 5,
      imgSrc: '/assets/images/landingpage/apps/app-courses.jpg',
      name: 'Courses',
      subtext: 'Application',
      url: 'https://spike-angular-pro-main.netlify.app/apps/courses',
    },
    {
      id: 6,
      imgSrc: '/assets/images/landingpage/apps/app-employee.jpg',
      name: 'Employee',
      subtext: 'Application',
      url: 'https://spike-angular-pro-main.netlify.app/apps/employee',
    },
    {
      id: 7,
      imgSrc: '/assets/images/landingpage/apps/app-note.jpg',
      name: 'Notes',
      subtext: 'Application',
      url: 'https://spike-angular-pro-main.netlify.app/apps/notes',
    },
    {
      id: 8,
      imgSrc: '/assets/images/landingpage/apps/app-ticket.jpg',
      name: 'Tickets',
      subtext: 'Application',
      url: 'https://spike-angular-pro-main.netlify.app/apps/tickets',
    },
    {
      id: 9,
      imgSrc: '/assets/images/landingpage/apps/app-invoice.jpg',
      name: 'Invoice',
      subtext: 'Application',
      url: 'https://spike-angular-pro-main.netlify.app/apps/invoice',
    },
    {
      id: 10,
      imgSrc: '/assets/images/landingpage/apps/app-todo.jpg',
      name: 'Todo',
      subtext: 'Application',
      url: 'https://spike-angular-pro-main.netlify.app/apps/todo',
    },
    {
      id: 11,
      imgSrc: '/assets/images/landingpage/apps/app-taskboard.jpg',
      name: 'Taskboard',
      subtext: 'Application',
      url: 'https://spike-angular-pro-main.netlify.app/apps/taskboard',
    },
    {
      id: 12,
      imgSrc: '/assets/images/landingpage/apps/app-blog.jpg',
      name: 'Blog List',
      subtext: 'Application',
      url: 'https://spike-angular-pro-main.netlify.app/apps/blog/post',
    },
  ];

  testimonials: testimonials[] = [
    {
      id: 1,
      imgSrc: '/assets/images/profile/user-1.jpg',
      name: 'Jenny Wilson',
      subtext: 'Features avaibility',
    },
    {
      id: 2,
      imgSrc: '/assets/images/profile/user-2.jpg',
      name: 'Minshan Cui',
      subtext: 'Features avaibility',
    },
    {
      id: 3,
      imgSrc: '/assets/images/profile/user-3.jpg',
      name: 'Eminson Mendoza',
      subtext: 'Features avaibility',
    },
  ];

  features: features[] = [
    {
      id: 1,
      icon: 'wand',
      title: 'Juan P.',
      color: 'primary',
      subtext:
        'InvertirYa! me ha ayudado a comprender el mercado de bienes raíces y a tomar decisiones informadas.',
    },
    {
      id: 2,
      icon: 'shield-lock',
      title: 'María G.',
      color: 'accent',
      subtext:
        'La asesoría experta de InvertirYa! fue fundamental para encontrar la propiedad perfecta.',
    },
    {
      id: 3,
      icon: 'archive',
      title: 'Carlos R.',
      color: 'warning',
      subtext: 'InvertirYa! me brindó acceso a oportunidades exclusivas que no habría encontrado por mi cuenta.',
    },
    {
      id: 4,
      icon: 'adjustments',
      title: 'Lucía M.',
      color: 'error',
      subtext: 'Participar en las conferencias de InvertirYa! me dio una nueva perspectiva sobre cómo manejar mis inversiones.',
    },
    {
      id: 5,
      icon: 'tag',
      title: 'Roberto T.',
      color: 'success',
      subtext: 'InvertirYa! hizo que mi primera inversión en bienes raíces fuera una experiencia sin estrés.',
    },
    {
      id: 9,
      icon: 'chart-pie',
      title: 'Ana S.',
      color: 'error',
      subtext: 'La educación financiera que ofrece InvertirYa! es excepcional. Los cursos están bien estructurados y son muy informativos.',
    },
    {
      id: 7,
      icon: 'language-katakana',
      title: 'Pedro L.',
      color: 'accent',
      subtext: 'InvertirYa! fue la clave para expandir mi portafolio de inversiones. Las oportunidades exclusivas y la guía profesional hicieron toda la diferencia.',
    },
    {
      id: 13,
      icon: 'calendar',
      title: 'Elena F.',
      color: 'warning',
      subtext: 'Gracias a InvertirYa!, encontré una propiedad increíble que se ha valorizado significativamente en poco tiempo. ¡Estoy encantada con mi inversión!',
    },

    {
      id: 6,
      icon: 'diamond',
      title: 'Javier C.',
      color: 'primary',
      subtext: 'InvertirYa! me proporcionó la confianza y el conocimiento necesario para invertir en bienes raíces por primera vez. Su equipo es realmente profesional y dedicado.',
    },
    {
      id: 11,
      icon: 'refresh',
      title: 'Sofía H.',
      color: 'primary',
      subtext: 'Los cursos de InvertirYa! son invaluables. Aprendí más en unas pocas semanas de lo que esperaba y ahora puedo manejar mis inversiones con mucha más confianza.',
    },
    {
      id: 8,
      icon: 'arrows-shuffle',
      title: 'Andrés M.',
      color: 'accent',
      subtext: 'La transparencia y el enfoque educativo de InvertirYa! fueron esenciales para mí. No solo invertí, sino que también aprendí a hacerlo de manera efectiva y segura.',
    },
    {
      id: 10,
      icon: 'layers-intersect',
      title: 'Valeria T.',
      color: 'success',
      subtext: 'InvertirYa! me ofreció una experiencia de inversión sin complicaciones. Desde el primer contacto hasta la finalización de la compra, todo fue manejado de manera impecable.',
    },
    {
      id: 14,
      icon: 'messages',
      title: 'Fernando R.',
      color: 'error',
      subtext: 'Participar en las conferencias de InvertirYa! cambió mi forma de ver las inversiones inmobiliarias. Las estrategias y consejos prácticos han sido realmente útiles.',
    },
    {
      id: 12,
      icon: 'book',
      title: 'Laura P.',
      color: 'warning',
      subtext: 'InvertirYa! me ayudó a identificar propiedades con alto potencial de revalorización. Estoy viendo excelentes retornos y estoy muy agradecida por su apoyo.',
    },
  ];

  quicklinks: quicklinks[] = [
    {
      id: 1,
      title: 'Pricing Page',
      link: '/theme-pages/pricing',
    },
    {
      id: 2,
      title: 'Authentication Design',
      link: '/authentication/side-login',
    },
    {
      id: 3,
      title: 'Register Now',
      link: '/authentication/side-register',
    },
    {
      id: 4,
      title: '404 Error Page',
      link: '/authentication/error',
    },
    {
      id: 5,
      title: 'Notes App',
      link: '/apps/notes',
    },
    {
      id: 6,
      title: 'Employee App',
      link: '/apps/employee',
    },
    {
      id: 7,
      title: 'Todo Application',
      link: '/apps/todo',
    },
    {
      id: 8,
      title: 'Treeview',
      link: '/theme-pages/treeview',
    },
  ];
}
