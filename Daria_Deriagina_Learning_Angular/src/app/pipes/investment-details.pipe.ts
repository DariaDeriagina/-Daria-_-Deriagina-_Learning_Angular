import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'investmentDetails',
  standalone: true
})
export class InvestmentDetailsPipe implements PipeTransform {

  transform(value: { name: string, duration: number }): string {
    return `${value.name} (${value.duration} years)`;
  }

}
