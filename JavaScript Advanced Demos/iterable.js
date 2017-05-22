function reverseArrayIterable(arr) {
    let index = arr.length-1;
    return {
        [Symbol.iterator]: function() { return this; },
        ['next']: function() {
            if (index >= 0)
                return { value: arr[index--], done: false };
            else
                return { done: true };
        }
    }
}

let arr = [10, 20, 30];
for (let x of reverseArrayIterable(arr))
    console.log(x);

