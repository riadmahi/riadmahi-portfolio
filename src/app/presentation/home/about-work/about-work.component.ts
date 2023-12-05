import {AfterViewInit, Component, ElementRef} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about-work',
  templateUrl: './about-work.component.html',
  styleUrls: ['./about-work.component.scss']
})
export class AboutWorkComponent implements AfterViewInit {

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = this.elRef.nativeElement.querySelectorAll('.text');

    textElements.forEach((text: HTMLElement) => {
      gsap.to(text, {
        backgroundSize: '100%', // Assurez-vous que cette valeur est conforme à vos besoins
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 36%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  }
}
