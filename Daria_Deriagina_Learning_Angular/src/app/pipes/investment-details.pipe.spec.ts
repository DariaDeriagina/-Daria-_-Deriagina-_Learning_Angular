import { InvestmentDetailsPipe } from './investment-details.pipe';

describe('InvestmentDetailsPipe', () => {
  it('create an instance', () => {
    const pipe = new InvestmentDetailsPipe();
    expect(pipe).toBeTruthy();
  });
});
