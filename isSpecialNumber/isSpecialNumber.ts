function isSpecialNumber(n: number): string {
    // Convert the number to a string to check each digit
    const digits = n.toString();
    
    // Check if every digit is within the allowed set
    for (let digit of digits) {
        if (!['0', '1', '2', '3', '4', '5'].includes(digit)) {
            return "NOT!!"; // If any digit is not in the set, return "NOT!!"
        }
    }
    
    return "Special!!"; // If all digits are valid, return "Special!!"
}