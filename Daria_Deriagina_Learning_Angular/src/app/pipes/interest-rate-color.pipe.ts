import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interestRateColor',
  standalone: true
})
export class InterestRateColorPipe implements PipeTransform {

  transform(interestRate: number): string {
    if (interestRate >=5) {
      return 'red';       // High interest rate
    } else if (interestRate == 3) {
      return 'orange';    // Moderate interest rate
    } else {
      return 'green';     // Low interest rate
    }
  }

}
