import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {
  @Input('myHighlight') color: string;

  constructor (private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter () {
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
