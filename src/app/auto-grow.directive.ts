import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoGrow]'
})
export class AutoGrowDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('focus') onFocus() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
  }

  @HostListener('blur') onBlur() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
  }

}
