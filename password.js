let password = process.argv.slice(2,3).toString();

const obfuscate = function(passwordString) {
  let obfuscatedPassword = passwordString.replace(/a/g, '4').replace(/e/g, '3').replace(/o/, '0').replace(/l/,'1');
  return obfuscatedPassword;
};

console.log(obfuscate(password));