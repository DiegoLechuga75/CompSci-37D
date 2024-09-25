let myArr = [8,3,6,1,9,12,0,4,7,90,56];

const bubbleSort = (arr) => {
    for(let step = 0; step < arr.length; step++){
        for(let i = 0; i < arr.length - (1 + step); i++){
            if(arr[i] > arr[i + 1]){
                let aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
            }
        }
    }
    return arr;
}

console.log(myArr);
console.log(bubbleSort(myArr));


