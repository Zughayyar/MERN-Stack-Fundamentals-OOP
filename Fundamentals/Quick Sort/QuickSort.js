function partition(arr, low, high) {
    const pivot = arr[high]; // Choose the last element as the pivot
    let i = low - 1; // Index of smaller element

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Swap arr[i + 1] with the pivot
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1; // Return the position of the pivot
}

function quicksort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get the pivot index
        const pivotIndex = partition(arr, low, high);

        // Recursively sort elements before and after the pivot
        quicksort(arr, low, pivotIndex - 1); // Left side of the pivot
        quicksort(arr, pivotIndex + 1, high); // Right side of the pivot
    }
}

const array = [10, 7, 8, 9, 1, 5];
console.log("Original Array:", array);

quicksort(array);
console.log("Sorted Array:", array);