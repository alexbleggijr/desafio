export type DsLiteralUnion<T extends U, U = string> =
  | T
  | (U & Record<never, never>);
