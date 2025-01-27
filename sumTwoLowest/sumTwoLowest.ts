function sumTwoLowest(numbers: number[]): number {
    // Sort the array in ascending order
    const sortedNumbers = numbers.sort((a, b) => a - b);
    
    // Return the sum of the first two elements (the two lowest numbers)
    return sortedNumbers[0] + sortedNumbers[1];
}

// Example usage:
console.log(sumTwoLowest([19, 5, 42, 2, 77])); // Output: 7
console.log(sumTwoLowest([10, 343445353, 3453445, 3453545353453])); // Output: 3453455


