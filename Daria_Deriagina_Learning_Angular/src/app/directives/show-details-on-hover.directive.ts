import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appShowDetailsOnHover]'
})
export class ShowDetailsOnHoverDirective {
  @Input('appShowDetailsOnHover') details: string = '';

  private tooltip: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    console.log('Hover started for: ', this.details);
    if (!this.tooltip) {
      this.tooltip = this.renderer.createElement('span');
      this.renderer.addClass(this.tooltip, 'tooltip');
      this.renderer.appendChild(this.tooltip, this.renderer.createText(this.details));
      this.renderer.appendChild(document.body, this.tooltip);

      const rect = this.el.nativeElement.getBoundingClientRect();
      this.renderer.setStyle(this.tooltip, 'top', `${rect.top + window.scrollY - 30}px`);
      this.renderer.setStyle(this.tooltip, 'left', `${rect.left + window.scrollX}px`);
      // Add a delay for smooth fade-in
      setTimeout(() => this.renderer.addClass(this.tooltip, 'show'), 10);
    }


  }


  @HostListener('mouseleave') onMouseLeave() {
    console.log('Hover ended for: ', this.details);
    if (this.tooltip) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltip);
      this.tooltip = null;
    }
  }
}
