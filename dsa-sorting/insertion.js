function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i]; // The current element to be inserted
        let j = i - 1; // Start comparing with the element just before i

        // Move elements of the sorted section that are greater than current
        // to one position ahead of their current position
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j = j - 1;
        }

        // Insert the current element into its correct position
        array[j + 1] = current;
    }
    return array; // Return the sorted array
}

// Example usage:
console.log(insertionSort([4, 3, 2, 10, 12, 1, 5, 6]));
