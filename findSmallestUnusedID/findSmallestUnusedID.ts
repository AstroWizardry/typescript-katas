function findSmallestUnusedID(usedIDs: number[]): number {
    // Create a Set from the used IDs to eliminate duplicates and allow for O(1) lookups
    const usedIDSet = new Set(usedIDs);
    
    // Start checking from ID 0 upwards
    let smallestUnusedID = 0;
    
    // Find the smallest unused ID
    while (usedIDSet.has(smallestUnusedID)) {
        smallestUnusedID++;
    }
    
    return smallestUnusedID; // Return the smallest unused ID
}

// Example usage:
console.log(findSmallestUnusedID([0, 1, 2, 3, 4])); // Output: 5
console.log(findSmallestUnusedID([0, 0, 1, 2, 2, 3])); // Output: 4
console.log(findSmallestUnusedID([5, 3, 0, 1, 2, 2])); // Output: 4
console.log(findSmallestUnusedID([1, 2, 3, 4, 5])); // Output: 0