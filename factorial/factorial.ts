function factorial(n: number): number {
    // Return the factorial of the given number.
    if (n < 0) return -1; // Factorial for negative numbers is not defined
    if (n === 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}