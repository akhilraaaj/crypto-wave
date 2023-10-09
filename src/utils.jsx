export function currencyFormat(num) {
    // Convert the number to a string with fixed decimal places
    const formattedNumber = num.toFixed(2);
  
    // Split the integer and fractional parts
    const [integerPart, fractionalPart] = formattedNumber.split('.');
  
    // Format the integer part with commas for Indian numbering
    const integerWithCommas = integerPart.replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
  
    // Combine the integer part and fractional part with the ₹ symbol
    const formattedAmount = '₹' + integerWithCommas + '.' + fractionalPart;
  
    return formattedAmount;
  }
  