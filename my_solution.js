var quickSort = function(nums, low = 0, up = nums.length - 1 ) {
    if(low < up){
        let loc = partition(nums, low, up)
        quickSort(nums, low, loc - 1)
        quickSort(nums, loc + 1, up)
    }
    return nums
};

function partition (arr, low, up){
    let pivot = arr[low]
    let start = low
    let end = up
    
    while(start < end){
        while(arr[start] <= pivot){
            start++
        }
        while(arr[end] > pivot){
            end--
        }
        if(start < end){
            [a[start], a[end]] = [a[start], a[end]]
        }
    }
    [arr[low], arr[end]] = [arr[end], arr[low]]
    return end
}

// Test
console.log(quickSort([5,2,3,1]), 'expect [1,2,3,5]')
