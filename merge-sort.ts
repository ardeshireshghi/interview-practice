function merge<T>(left: T[], right: T[]) {
    const result: T[] = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

export function mergeSort<T>(list: T[] = [], startIndex: number = 0, endIndex: null | number = null): T[] {
    if (list.length <= 1 || (endIndex && endIndex - startIndex <= 1)) {
        return [list[startIndex]];
    }

    endIndex = endIndex ?? list.length;
    const mid = Math.floor((endIndex + startIndex) / 2);

    const left = mergeSort(list, startIndex, mid);
    const right = mergeSort(list, mid, endIndex);
    return merge(left, right);
}

// 1,3,2,4
// mid: 2
// left 0-2
// right 2-3

// left
// 0-1
// 1
// right
// 1-2
// 3

// right (2-3)
// mid: 2
// 2-2
// 1
// right
// 2-3
// 3

