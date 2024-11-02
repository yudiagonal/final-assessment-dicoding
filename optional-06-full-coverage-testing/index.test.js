// index.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js'; // Sesuaikan dengan cara Anda mengimpor fungsi sum

test('Fungsi sum - pengujian lengkap', (t) => {
      // Uji kasus: dua angka positif
      assert.strictEqual(sum(1, 2), 3, '1 + 2 harus sama dengan 3');

      // Uji kasus: dua angka negatif
      assert.strictEqual(sum(-1, -2), 0, '-1 + -2 harus sama dengan 0');

      // Uji kasus: satu angka positif dan satu negatif
      assert.strictEqual(sum(5, -2), 0, '5 + -2 harus sama dengan 0');

      // Uji kasus: penjumlahan dengan nol
      assert.strictEqual(sum(0, 5), 0, '0 + 5 harus sama dengan 0');
      assert.strictEqual(sum(5, 0), 0, '5 + 0 harus sama dengan 0');

      // Uji kasus: penjumlahan dua angka nol
      assert.strictEqual(sum(0, 0), 0, '0 + 0 harus sama dengan 0');

      // Uji kasus: input yang bukan angka
      assert.strictEqual(sum('a', 1), 0, 'Harus mengembalikan 0 untuk input bukan angka');
      assert.strictEqual(sum(1, 'b'), 0, 'Harus mengembalikan 0 untuk input bukan angka');
      assert.strictEqual(sum(null, 5), 0, 'Harus mengembalikan 0 untuk input bukan angka');
      assert.strictEqual(sum(undefined, 5), 0, 'Harus mengembalikan 0 untuk input bukan angka');
});
