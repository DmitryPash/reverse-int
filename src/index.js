module.exports = function reverse (n) {
    let mn;
    if(n < 0) {
       mn = -n
    } else {
       mn = n
    }
  let sn = String(mn);
  let nm = sn.split('').reverse().join('')
  return Number(nm)
}
