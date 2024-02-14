function merge(left, right) {
    let result = [];
    let left = 0;
    let right = 0;

    while(left < left.length && right < right.length) {
        if(left[left] < right[right]) {
            result.push(left[left]);
            left++;
        } else {
            result.push(right[right]);
            right++;
        }
    }
    return result.concat(left.slice(left)).concat(right.slice(right));
}

function mergeSort(array) {

    if(array.length <= 1) {
        return array;
    }

    //const find the middle point to divide the array into two halves. 
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Use recusion to combine the left and right
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

module.exports = { merge, mergeSort};