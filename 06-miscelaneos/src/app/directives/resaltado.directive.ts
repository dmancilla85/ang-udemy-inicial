import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log("directiva llamada");

  }

  @Input("appResaltado") nuevoColor: string;

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');
    this.el.nativeElement.style.opacity = 0.5; 
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
    this.el.nativeElement.style.opacity = 1;
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;

  }

}
