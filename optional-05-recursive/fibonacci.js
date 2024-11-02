function fibonacci(n) {
      if (n < 0) return undefined;
      const fibSequence = [0, 1];
      for (let i = 2; i <= n; i++) {
            fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2]; // Menghitung deret Fibonacci
      }
      return fibSequence.slice(0, n + 1);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
