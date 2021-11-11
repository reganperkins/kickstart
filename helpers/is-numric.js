function isNumeric(n) {
  return /^-?\d+$/.test(n);
}

module.exports = isNumeric;
