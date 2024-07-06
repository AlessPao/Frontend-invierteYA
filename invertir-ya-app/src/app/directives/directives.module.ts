import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyLettersDirective } from './utils/only-letters.directive';
import { OnlyNumbersDirective } from './utils/only-numbers.directive';
import { UppercaseDirective } from './utils/uppercase.directive';
import { NumberCommaDirective } from './utils/number-comma.directive';



@NgModule({
  declarations: [
    UppercaseDirective,
    OnlyNumbersDirective,
    OnlyLettersDirective,
    NumberCommaDirective
  ],
  exports:[
    UppercaseDirective,
    OnlyNumbersDirective,
    OnlyLettersDirective,
    NumberCommaDirective
  ]
})
export class DirectivesModule { }
