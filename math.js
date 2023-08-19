const math = {};

math.lerp = (a, b, t) => {
  return a + (b - a) * t;
};

math.formatNumber = (n, dec = 0) => {
  return n.toFixed(dec);
};

math.invLerp = (a, b, c) => {
  t = (c - a) / (b - a);
  return t;
};
math.remap = (oA, oB, nA, nB, v) => {
  const t = math.invLerp(oA, oB, v);
  const n = math.lerp(nA, nB, t);
  return n;
};
