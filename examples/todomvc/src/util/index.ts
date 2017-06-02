export * from "./todo-storage";
export * from "./types";

export const compose =
  (f1: (x: any) => any, f2: (x: any) => any) => (x: any) => f1(f2(x));
