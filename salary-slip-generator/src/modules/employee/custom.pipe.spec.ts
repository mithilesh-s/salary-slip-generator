import { CustomPipe } from './custom.pipe';

describe('TitleCasePipe', () => {
  const pipe = new CustomPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });

  it('transforms "abc def" to "Abc Def"', () => {
    expect(pipe.transform('abc def')).toBe('Abc Def');
  });
});
