export type BitFieldResolvable<S extends string> =
  | S
  | number
  | bigint
  | BitFlag<S>
  | BitFieldResolvable<S>[];

export class BitFlag<S extends string> {
  static Flags: Record<string, bigint> = {};

  static DefaultBit = 0n;

  bitfield: bigint;

  ["constructor"]!: typeof BitFlag;

  constructor(bits?: BitFieldResolvable<S>) {
    this.bitfield = this.constructor.resolve(
      bits ?? this.constructor.DefaultBit
    );

    if (!this.constructor.validate(this.bitfield))
      throw new RangeError("BITFIELD_INVALID");
  }

  any(bit: BitFieldResolvable<S>): boolean {
    return (
      (this.bitfield & this.constructor.resolve(bit)) !==
      this.constructor.DefaultBit
    );
  }

  equals<S extends string>(bit: BitFieldResolvable<S>) {
    return this.bitfield === this.constructor.resolve(bit);
  }

  has(bit: BitFieldResolvable<S>, ..._hasParams: any[]): boolean {
    const resolvedBit = this.constructor.resolve(bit);
    return (this.bitfield & resolvedBit) === resolvedBit;
  }

  missing(bits: BitFieldResolvable<S>, ...hasParams: any[]): S[] {
    return new this.constructor(bits).remove(this).toArray(...hasParams);
  }

  freeze(): Readonly<BitFlag<S>> {
    return Object.freeze(this);
  }

  add(...bits: BitFieldResolvable<S>[]): BitFlag<S> {
    let total = this.constructor.DefaultBit;
    for (const bit of bits) {
      total |= this.constructor.resolve(bit);
    }
    if (Object.isFrozen(this))
      return new this.constructor<S>(this.bitfield | total);
    this.bitfield |= total;
    return this;
  }

  remove(...bits: BitFieldResolvable<S>[]): BitFlag<S> {
    let total = this.constructor.DefaultBit;
    for (const bit of bits) {
      total |= this.constructor.resolve(bit);
    }
    if (Object.isFrozen(this))
      return new this.constructor<S>(this.bitfield & ~total);
    this.bitfield &= ~total;
    return this;
  }

  toArray(...hasParams: any[]): S[] {
    return [...this[Symbol.iterator](...hasParams)];
  }

  toJSON() {
    return typeof this.bitfield === "number"
      ? this.bitfield
      : this.bitfield.toString();
  }

  valueOf() {
    return this.bitfield;
  }

  *[Symbol.iterator](...hasParams: any[]): IterableIterator<S> {
    for (const bitName of Object.keys(this.constructor.Flags)) {
      if (isNaN(Number(bitName)) && this.has(bitName as any, ...hasParams))
        yield bitName as S;
    }
  }

  static resolve<S extends string>(bit: BitFieldResolvable<S>): bigint {
    const { DefaultBit } = this;
    if (typeof DefaultBit === typeof bit && (bit as bigint) >= DefaultBit)
      return bit as bigint;
    if (bit instanceof BitFlag) return bit.bitfield;
    if (Array.isArray(bit))
      return bit
        .map((p) => this.resolve(p))
        .reduce((prev, p) => prev | p, DefaultBit);
    if (typeof bit === "string") {
      if (!isNaN(Number(bit))) return BigInt(bit);
      if (this.Flags[bit] !== undefined) return this.Flags[bit];
    }
    throw new RangeError("BITFIELD_INVALID");
  }

  static validate(bits: bigint): boolean {
    const all = Object.values(this.Flags);
    while (bits > 0n) {
      const bit = bits & -bits;
      if (!all.includes(bit)) return false;
      bits ^= bit;
    }
    return true;
  }
}
