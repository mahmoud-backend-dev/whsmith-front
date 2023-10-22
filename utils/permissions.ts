import { BitFieldResolvable, BitFlag } from "./bitflag";

export const Permission = {
  ManageCategory: 1n << 0n,
  ManageUpdateProductRequest: 1n << 1n,
  ManageAddProductRequest: 1n << 2n,
  ManageUser: 1n << 3n,
  Administrator: 1n << 6n,
};

Object.freeze(Permission);

export type Permission = (typeof Permission)[keyof typeof Permission];

export type PermissionString = keyof typeof Permission;
export type PermissionResolvable = BitFieldResolvable<PermissionString>;

export class PermissionBitFlags extends BitFlag<PermissionString> {
  static Flags = Permission;

  static DefaultBit = 0n;

  override missing(
    bits: PermissionResolvable,
    checkAdmin = true
  ): PermissionString[] {
    return checkAdmin && this.has(Permission.Administrator)
      ? []
      : super.missing(bits);
  }

  override has(bits: PermissionResolvable, checkAdmin = true): boolean {
    return (
      (checkAdmin && super.has(Permission.Administrator)) || super.has(bits)
    );
  }

  override any(bits: PermissionResolvable, checkAdmin = true): boolean {
    return (
      (checkAdmin && super.has(Permission.Administrator)) || super.any(bits)
    );
  }
}
