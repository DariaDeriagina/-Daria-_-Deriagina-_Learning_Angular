import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @Input() appHoverHighlight = '';

  constructor(private el: ElementRef) {}
    @HostListener('mouseenter') onMouseEnter(){
    this.highLight(this.appHoverHighlight || 'yellow')
    }

    @HostListener('mouseleave') onMouseLeave() {
    this.highLight('')
    }

    private highLight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
    }

}
