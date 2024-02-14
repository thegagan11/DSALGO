function selectionSort(arr) {
    let n = arr.length;

    for(let i =0; i < n; i++) {
        // Finding the smallest number in the subarray... 
        let min = i;
        for(let j = i + 1; j < n; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }

        }
        if (min !== i) {
            //Swapping the elements. 
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;

        }
    }
    return arr;
}

module.exports = selectionSort;