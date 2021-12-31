import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: "[daniel]"
})
export class TesteDirective implements OnInit  {

  @Input() fundo?: string
  @Input() tamFont?: string = "100px"

  @HostListener('click') 
  onClick() {
    console.log("Daniel Aprea")
  }

  constructor(private el: ElementRef, private render: Renderer2) { }

   ngOnInit(){
    this.render.setStyle(this.el.nativeElement, 'background-color', `${this.fundo}`)
    this.render.setStyle(this.el.nativeElement, 'font-size', `${this.tamFont}`)
   }

}
