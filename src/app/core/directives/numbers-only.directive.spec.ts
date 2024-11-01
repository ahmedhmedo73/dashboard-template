import { NumbersOnlyDirective } from './numbers-only.directive';

describe('NumbersOnlyDirective', () => {
  it('should create an instance', () => {
    const directive = new NumbersOnlyDirective(true);
    expect(directive).toBeTruthy();
  });
});
