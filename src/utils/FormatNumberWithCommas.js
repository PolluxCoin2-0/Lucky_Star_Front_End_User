export const FormatNumberWithCommas = (number) => {
    // Convert the number to a string
    const numberString = number.toString();
    
    // Split the string into integer and decimal parts
    const [integerPart, decimalPart] = numberString.split(".");
  
    // Format the integer part with commas
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    // Combine the formatted integer part with the decimal part, if it exists
    return decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
  };
  