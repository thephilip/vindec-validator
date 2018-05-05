
# Vindec VIN (Vehicle Identification Number) Validator
###### Used by the Vindec package to validate VIN numbers, but may also be used as a standalone package.

## Installation
[![NPM](https://nodei.co/npm/vindec-validator.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/<package>/)

Install with either `npm i vindec-validator` or `yard add vindec-validator`.  If you are interested in learning how I implemented the algorithm or would like to create your own implementation (or update this one!?), I found the following read to be extremely beneficial.

[DataOne Software](https://vin.dataonesoftware.com/vin_basics_blog/bid/112040/use-vin-validation-to-improve-inventory-quality)

## Usage
```javascript

const validator = require('vindec-validator')
console.log(`Vin is valid? ${validator.valid('1234')}`) // false

```
