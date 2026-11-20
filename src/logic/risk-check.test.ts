import { describe, it, expect } from 'vitest';
import { splitEqually } from './split';

function total(m: Map<string, number>): number {
  return [...m.values()].reduce((a, b) => a + b, 0);
}

describe('risk checks (expected correct behavior)', () => {
  it('R1: empty participant list should not lose the amount', () => {
    expect(total(splitEqually(1000, []))).toBe(1000);
  });

  it('R2: duplicate names should not lose shares', () => {
    expect(() => splitEqually(1000, ['A', 'A'])).toThrow();
  });

  it('R3: negative amount should split to the same total', () => {
    expect(() => splitEqually(-1000, ['A', 'B', 'C'])).toThrow();
  });
});