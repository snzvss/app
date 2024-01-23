import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "¡Descubre las Ventajas de Ionic!",
      description: "Ionic es un marco de desarrollo de código abierto que permite a los desarrolladores crear aplicaciones móviles increíbles y eficientes utilizando tecnologías web estándar como HTML, CSS y JavaScript.",
      image: "./assets/logo.png",
      help_text: "Explora las ventajas de Ionic y cómo facilita el desarrollo de aplicaciones móviles modernas. Para obtener más información, visita <a href='https://ionicframework.com/docs/'>nuestra documentación</a>.",
      class: "slide-1"
    },
    {
      title: "Rápido y Eficiente",
      description: "Con Ionic, puedes construir aplicaciones rápidas y eficientes gracias a su rendimiento optimizado y a la posibilidad de compartir código entre plataformas, lo que reduce el tiempo de desarrollo.",
      image: "./assets/rapido.png",
      help_text: "Aprovecha la velocidad y eficiencia de Ionic para llevar tus ideas al mercado más rápidamente. Descubre más en <a href='https://ionicframework.com/docs/'>nuestra documentación</a>.",
      class: "slide-2"
    },
    {
      title: "Experiencia Consistente",
      description: "Ofrece a tus usuarios una experiencia consistente en múltiples plataformas. Ionic utiliza un conjunto de componentes UI preconstruidos que se ven y se sienten geniales en iOS, Android y la web.",
      image: "./assets/experiencia.png",
      help_text: "Asegura una experiencia de usuario uniforme en todas las plataformas con Ionic. Obtén más detalles en <a href='https://ionicframework.com/docs/'>nuestra documentación</a>.",
      class: "slide-3"
    },
    {
      title: "Escalabilidad y Mantenimiento",
      description: "Ionic facilita la escalabilidad y el mantenimiento a largo plazo de tus aplicaciones. Con su arquitectura modular, es fácil agregar nuevas características y realizar actualizaciones sin problemas.",
      image: "./assets/escalable.png",
      help_text: "Descubre cómo Ionic simplifica la escalabilidad y el mantenimiento de tus aplicaciones. Visita <a href='https://ionicframework.com/docs/'>nuestra documentación</a> para más información.",
      class: "slide-4"
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
