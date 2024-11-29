import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input('appHighlightOnFocus') focusColor: string = 'lightgreen';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus() {
    this.renderer.setStyle(this.el.nativeElement, 'outline', `2px solid ${this.focusColor}`);
  }

  @HostListener('blur') onBlur() {
    this.renderer.removeStyle(this.el.nativeElement, 'outline');
  }

}
