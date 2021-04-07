import { CommaSeparatedPipe } from "./comma-separated.pipe";

describe('CommaSeparatedPipe', () => {
  const pipe = new CommaSeparatedPipe();

  it('should prepend a comma to the string value, if the value is not the first one in the list', () => {
    expect(pipe.transform('text', false)).toBe(', text');
  });
  
  it('should not prepend a comma to the string value, if the value is the first in the list', () => {
    expect(pipe.transform('text', true)).toBe('text');
  });

});
