'use strict';

export function isNullOrUndefined(object) {
  return object === null || object === undefined;
}

export function removeItemByValue(from, value) {
  const index = from.indexOf(value);

  if (index > -1) {
    from.splice(index, 1);
  }
}

export function generateRandomId() {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}
