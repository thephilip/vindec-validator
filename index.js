
const translit = JSON.parse(JSON.stringify(require('./transliterals.json')))

exports.valid =  function(vin) {
  let toValidate = vin.toUpperCase()
  const vinArray = vin.split('')
  const regex = /^[A-HJ-NPR-Z0-9]{8}[0-9X][A-HJ-NPR-Z0-9]{8}$/
  const weights = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2]

  // check length and for illegal chars
  if (vinArray.length !== 17 || !regex.test(toValidate)) {
    return false
  }

  // transliterate VIN
  let transliterated = vinArray.map((digit, index) => {
    return (translit[digit] && !undefined) ?
      translit[digit] * weights[index] :
      digit * weights[index]
  })

  // sum weighted values
  let weightedSum = transliterated.reduce((acc, val) => {
    return acc + val
  })

  // compute remainder
  let remainder = weightedSum % 11

  if (remainder == toValidate.charAt(8) || (toValidate.charAt(8) == 'X' && remainder == 10)) {
    return true
  }

  return false
}
