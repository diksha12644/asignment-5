// // // // // .....................................................1.................................................
// // // // // const input = "5 1 2 3 4 5";
// // // // // function Find_Prod(arr) {
// // // // //     let product = 1;
// // // // //     for (let i = 0; i < arr.length; i++) {
// // // // //         product *= arr[i];
// // // // //     }
// // // // //     return product;
// // // // // }
// // // // // const arr = input.split(' ').slice(1).map(Number); 
// // // // // console.log(Find_Prod(arr)); 


// // // // //.........................................................2.....................................................

// // // // // const input = "5 1 2 3 4 5";
// // // // // function Find_Sum(arr) {
// // // // //     let sum = 0;
// // // // //     for (let i = 0; i < arr.length; i++) {
// // // // //         sum += arr[i];
// // // // //     }
// // // // //     return sum;
// // // // // }
// // // // // const arr = input.split(' ').slice(1).map(Number); 
// // // // // console.log(Find_Sum(arr)); 



// // // // //.................................................3...........................................................


// // // // // function Count_Occurrences(A, K) {
// // // // //     let count = 0; 

    
// // // // //     for (let num of A) {
// // // // //         if (num === K) {
// // // // //             count++; 
// // // // //         }
// // // // //     }

// // // // //     return count; 
// // // // // }

// // // // // console.log(Count_Occurrences([5, 10, 5, 2, 8], 5)); 
// // // //   //................................................4..........................................................

// // // // function findEvenOdd(A) {
    
// // // //     let C = new Array(2).fill(0); 

    
// // // //     for (let num of A) {
// // // //         if (num % 2 === 0) {
// // // //             C[0] += num; 
// // // //         } else {
// // // //             C[1] += num; 
// // // //         }
// // // //     }

// // // //     return C; 
// // // // }

// // // // console.log(findEvenOdd([7,1,2,3,4,5,6,7]));  


// // // // .....................................5..............

function Find_Num(arr, num) {
    return arr.includes(num) ? "YES" : "NO";
}
const N = 5;  
const arr = [1, 2, 3, 4, 5];  
const M = 2; 

console.log(Find_Num(arr, M));  





// // // //......................................6...............................................................................

// // // var N = 6;
// // // var A = [11, 23, 3, 45, 72, 68];

// // // function highAge(N, A) {
    
// // //     return A.filter(age => age >= 18);
// // // }
// // // var result = highAge(N, A);
// // // console.log(result.join(" "));



// // // //............................................7................................................................


// // // var N = 5;
// // // var arr = [1, 2, 3, 4, 5];
// // // function Inc_Arr(N, arr) {

// // //     for (let i = 0; i < N; i++) {
// // //         arr[i] += 1;
// // //     }

// // //     console.log(arr.join(" "));
// // // }
// // // Inc_Arr(N, arr);

// // // //........................................8................................................

// // // var N = 7;
// // // var marks = [13, 89, 45, 98, 67, 45, 54];
// // // function isAllPass(N, marks) {
  
// // //     var allPass = marks.every(mark => mark >= 32);
    
// // //     return allPass ? "YES" : "NO";
// // // }
// // // console.log(isAllPass(N, marks));

// // // ................................................9..........................................


// // let N = 6;
// // let colors = [3, 2, 4, 1, 2, 3];

// // function uniqueColorShirts(N, colors) {
// //     let colorCount = {};

// //     for (let color of colors) {
// //         colorCount[color] = (colorCount[color] || 0) + 1;
// //     }

   
// //     let uniqueColors = Object.keys(colorCount).filter(color => colorCount[color] === 1);
// //     return uniqueColors.length;
// // }

// // console.log(uniqueColorShirts(N, colors)); 


// //........................................................10.............................................


// var N = 6;
// var arr = [33, 11, 44, 66, 22, 77];
// function findMinMax(N, arr) {

//     let min = arr[0];
//     let max = arr[0];
//     for (let i = 1; i < N; i++) {
//         if (arr[i] < min) {
//             min = arr[i];  
//         }
//         if (arr[i] > max) {
//             max = arr[i]; 
//         }
//     }
//     console.log(min, max);
// }
// findMinMax(N, arr);  
