// number-comma.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberComma]'
})
export class NumberCommaDirective {
  private regex: RegExp = new RegExp(/^\d+$/);

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event): void {
    const input = this.el.nativeElement as HTMLInputElement;
    const rawValue = input.value.replace(/,/g, '');
    if (!this.regex.test(rawValue) && rawValue !== '') {
      input.value = input.value.slice(0, -1);
      return;
    }
    input.value = this.formatNumber(rawValue);
  }

  private formatNumber(value: string): string {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
