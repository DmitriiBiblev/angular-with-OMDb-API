import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  @Output() clickOutside: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private _elementRef: ElementRef,
  ) {
  }

  @HostListener('document:click', ['$event.target'])
  onMouseEnter(targetElement: Node) {
    if (!this._elementRef.nativeElement.contains(targetElement)) {
      this.clickOutside.emit();
    }
  }
}
