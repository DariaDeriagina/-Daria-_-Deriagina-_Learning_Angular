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
      // Create tooltip element
      this.tooltip = this.renderer.createElement('span');
      this.renderer.addClass(this.tooltip, 'tooltip'); // Optional: Add a tooltip class for styling
      // this.renderer.setStyle(this.tooltip, 'position', 'absolute');
      // this.renderer.setStyle(this.tooltip, 'background-color', '#333');
      // this.renderer.setStyle(this.tooltip, 'color', '#fff');
      // this.renderer.setStyle(this.tooltip, 'padding', '5px');
      // this.renderer.setStyle(this.tooltip, 'border-radius', '3px');
      // this.renderer.setStyle(this.tooltip, 'top', '-25px');
      // this.renderer.setStyle(this.tooltip, 'left', '0');
      // this.renderer.setStyle(this.tooltip, 'z-index', '1000');
      // this.renderer.setStyle(this.tooltip, 'white-space', 'nowrap');
      this.renderer.appendChild(this.tooltip, this.renderer.createText(this.details));
      this.renderer.appendChild(this.el.nativeElement, this.tooltip);
      console.log('Tooltip created:', this.tooltip); // Debugging
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
