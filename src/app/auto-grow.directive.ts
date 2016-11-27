import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appAutoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})
export class AutoGrowDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  onFocus(){

  }

  onBlur(){

  }

}