import { v4 as uuidv4 } from 'uuid';

export function randomUuid() {
  return uuidv4();
}

// Utility type to make all fields and subfields optional
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
