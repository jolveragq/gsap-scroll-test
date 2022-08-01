import { Component, HostListener, OnInit } from "@angular/core";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    this.initScrollTriggers();
  }

  initScrollTriggers() {



    document.querySelectorAll(".section").forEach((section: HTMLDivElement | any) => {
console.log(section)
      if ( section.classList.contains('horizontal') ) {

        let container = document.querySelector(".horizontal-scroll");
        gsap.to(".horizontal-scroll", {
          x: () =>
            // @ts-ignore
            -(container.scrollWidth - document.documentElement.clientWidth) + "px",
          ease: "none",
          scrollTrigger: {
            // @ts-ignore
            trigger: container,
            invalidateOnRefresh: true,
            scrub: 1,
            pin: true,
            markers: true,
            // @ts-ignore
            end: () => "+=" + container.offsetWidth
          }
        });

      } else {

        ScrollTrigger.create({
          markers: true,
          trigger: section,
          start: () => "top top",
          anticipatePin: 1,
          //pinSpacing: true
        });

      }
    });
  }
}
