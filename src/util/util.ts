import { v4 as uuidv4 } from 'uuid';

export function randomUuid() {
  return uuidv4();
}

// Utility type to make all fields and subfields optional
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

/**
 * Deep merges two records by combining their properties.
 *
 * The mergeRecords function creates a copy of record1 in a new object called merged
 * and iterates over each key in record2. If both values of the corresponding keys
 * in record1 and record2 are objects, it recursively calls mergeRecords. If not,
 * it assigns the value from record2 to merged. Finally, it returns the merged record.
 *
 * @param record1 - The first record to merge.
 * @param record2 - The second record to merge.
 * @returns The merged record.
 */
export function deepMerge<T extends Record<string, any>>(record1: T, record2: T): T {
  const merged: Record<string, any> = { ...record1 };
  const record2Keys = Object.keys(record2 ?? {});
  for (let i = 0; i < record2Keys.length; i++) {
    const key = record2Keys[i];
    const value1 = record1[key];
    const value2 = record2[key];
    // Check if both values are objects and not null
    if (typeof value1 === 'object' && value1 !== null && typeof value2 === 'object' && value2 !== null) {
      merged[key] = deepMerge(value1, value2);
    } else {
      merged[key] = value2; // Take the value from record2
    }
  }

  return merged as T;
}
