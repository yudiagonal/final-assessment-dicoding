import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('test function sum', () => {
      assert.strictEqual(sum(1, 2), 3, '1 + 2 harus sama dengan 3');
      assert.strictEqual(sum(-1, -1), -2, '-1 + -1 harus sama dengan -2');
      assert.strictEqual(sum(-1, 1), 0, '-1 + 1 harus sama dengan 0');
      assert.strictEqual(sum(0, 5), 5, '0 + 5 harus sama dengan 5');
      assert.strictEqual(sum(5, 0), 5, '5 + 0 harus sama dengan 5');
});
