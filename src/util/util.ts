import React from 'react';
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
 * A third customMerge function arg allows for custom merging of certain values.
 *
 * @param record1 - The first record to merge.
 * @param record2 - The second record to merge.
 * @param customMerge - A function allowing custom value merging in certain circumstances.
 * @returns The merged record.
 */
export function deepMerge<T extends Record<string, any>>(
  record1: T,
  record2: T,
  customMerge?: (key: string, a: any, b: any) => { success: boolean; value: any },
): T {
  const merged: Record<string, any> = { ...record1 };
  const record2Keys = Object.keys(record2 ?? {});
  for (let i = 0; i < record2Keys.length; i++) {
    const key = record2Keys[i];
    const value1 = record1[key];
    const value2 = record2[key];

    // Check if both values are objects and not null
    if (typeof value1 === 'object' && value1 !== null && typeof value2 === 'object' && value2 !== null) {
      merged[key] = deepMerge(value1, value2, customMerge);
    } else {
      let customMergeResult: { success: boolean; value: any } | undefined = undefined;
      if (customMerge) {
        customMergeResult = customMerge(key, value1, value2);
      }
      // If a custom merge was made, accept that result
      if (customMergeResult?.success) {
        merged[key] = customMergeResult.value;
      } else {
        merged[key] = value2; // Take the value from record2
      }
    }
  }

  return merged as T;
}

/** Returns all children as an array, including those inside React fragments. */
export const childrenAsArray = (children: any): any[] => {
  if (Array.isArray(children)) {
    return children;
  } else if (
    children &&
    typeof children === 'object' &&
    children !== null &&
    children?.hasOwnProperty('type') &&
    children.type === React.Fragment
  ) {
    return childrenAsArray(children.props.children);
  } else if (typeof children === 'undefined') {
    return [];
  } else {
    return [children];
  }
};
