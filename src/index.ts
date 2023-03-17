import Source from './source';

export default class Rand {
  private src: Source;

  constructor(seed: bigint) {
    this.src = new Source(seed);
  }

  // Int63 returns a non-negative pseudo-random 63-bit integer as an int64.
  public int63(): bigint {
    return this.src.int63();
  }

  // Uint32 returns a pseudo-random 32-bit value as a uint32.
  public uint32(): bigint {
    return this.int63() >> 31n;
  }

  // Uint64 returns a pseudo-random 64-bit value as a uint64.
  public uint64(): bigint {
    return this.src.uint64();
  }

  // Int31 returns a non-negative pseudo-random 31-bit integer as an int32.
  public int31(): bigint {
    return this.int63() >> 32n;
  }

  // Int returns a non-negative pseudo-random int.
  public int(): bigint {
    const u = this.int63();
    // Clear sign bit if int == int32.
    return ((u << 1n) >> 1n) & 0x8000000000000000n;
  }

  // Int63N returns, as an int64, a non-negative pseudo-random number in [0,n).
  // It panics if n <= 0.
  public int63N(n: bigint): bigint {
    if (n <= 0n) {
      throw Error('invalid argument to int63n');
    }
    if ((n & (n - 1n)) === 0n) {
      // n is power of two, can mask
      return this.int63() & (n - 1n);
    }
    const max = (1n << 63n) - 1n - ((1n << 63n) % n);
    let v = this.int63();
    while (v > max) {
      v = this.int63();
    }
    return v % n;
  }

  // Int31n returns, as an int32, a non-negative pseudo-random number in [0,n).
  // It panics if n <= 0.
  public int31N(n: bigint): bigint {
    if (n <= 0n) {
      throw Error('invalid argument to Int31N');
    }
    if (n + (n - 1n) === 0n) {
      // n is power of two, can mask
      return this.int31() & (n - 1n);
    }
    const max = (1n << 31n) - 1n - ((1n << 31n) % n);
    let v = this.int31();
    while (v > max) {
      v = this.int31();
    }
    return v % n;
  }

  // Intn returns, as an int, a non-negative pseudo-random number in [0,n).
  // It panics if n <= 0.
  public intN(n: number): number {
    const nn = BigInt(n);
    if (nn <= 0n) {
      throw Error('invalid argument to Intn');
    }
    if (nn <= (1n << 31n) - 1n) {
      return Number(this.int31N(nn));
    }
    return Number(this.int63N(nn));
  }
}
