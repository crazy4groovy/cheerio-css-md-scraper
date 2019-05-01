module.exports = (ms, x) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(x), ms) || reject)
