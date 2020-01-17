'use strict';

module.exports = {
  int8: Int8Array,
  int16: Int16Array,
  int32: Int32Array,
  uint8: Uint8Array,
  uint16: Uint16Array,
  uint32: Uint32Array,
  float32: Float32Array,
  float64: Float64Array,
  bigint64: (typeof BigInt64Array !== 'undefined') ? BigInt64Array : undefined,
  biguint64: (typeof BigUint64Array !== 'undefined') ? BigUint64Array : undefined,
  array: Array
};
