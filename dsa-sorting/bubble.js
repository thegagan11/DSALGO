function bubbleSort(array) {
    let n = array.length;
    let swapped;

    do {
        swapped = false;
        for (let j = 0; j < n - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
        // After each pass, the largest unsorted element "bubbles up" to its correct position,
        // so the next pass doesn't need to check the last element (it's already sorted).
        n--;
    } while (swapped); // If no elements were swapped in the last pass, the array is sorted.

    return array; // Return the sorted array.
}

// Example usage:
console.log(bubbleSort([5, 1, 4, 2, 8])); // Should output the sorted array
