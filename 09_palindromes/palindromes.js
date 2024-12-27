const palindromes = function (stringWord) {
    // Remove all non-alphanumeric characters and spaces
    const cleanedString = stringWord.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string and compare with the original cleaned string
    const reversed = cleanedString.split('').reverse().join('');
    
    return cleanedString === reversed;
  };
  
  // Do not edit below this line
  module.exports = palindromes;  