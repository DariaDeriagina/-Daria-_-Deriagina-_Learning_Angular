import { HighlightOnFocusDirective } from './highlight-on-focus.directive';
import { ElementRef, Renderer2 } from '@angular/core';


describe('HighlightOnFocusDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightOnFocusDirective();
    expect(directive).toBeTruthy();
  });
});
