import { BruttoPipe } from './brutto.pipe';

describe('BruttoPipe', () => {
  it('create an instance', () => {
    const pipe = new BruttoPipe();
    expect(pipe).toBeTruthy();
  });
  it('calculate brutto', () => {
    const pipe = new BruttoPipe();
    const netto = 100;
    expect(pipe.transform(netto)).toBeCloseTo(119);
  });
});
