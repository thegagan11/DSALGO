/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(array, start = 0, end = array.length -1){
    let pivotValue = array[start];
    let pivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (array[i] < pivotValue) {
            pivotIndex++;
            // Swap array[i] and array[pivotIndex]
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        }
}

// Swap the starting element (pivot) with the element at the pivotIndex

[array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];
/*
quickSort accepts an array, left index, and right index
*/

function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);
        // Sort the left side
        quickSort(array, left, pivotIndex - 1);
        // Sort the right side
        quickSort(array, pivotIndex + 1, right);
    }
    return array; // Include this to return the sorted array
}

module.exports = quickSort;