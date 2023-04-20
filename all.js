// function aa() {
//     console.log("是aa喔~")
// };
// aa();

// let arr = [100, 200, 300, 400, 500, 600, 700, 800, 900]
// let sum = 0;
// arr.forEach(
//     function (i) {
//         sum += i;
//         console.log(i);
//     }
// );


// let arr =[];

// let sum = 0;
// for (let i = 0; i <= 1000; i+=2) {
//     arr.push(i)
//     // sum +=i
// }
// console.log(arr);


// const newarr = arr.filter(function (i) {
//     return i
// });
// console.log(newarr);

// const maparr = arr.map(function (i) {
//     return i
// });
// console.log(maparr);

//操作DOM

//1.抓出要得HTML元素(DOM節點)
const title0 = document.getElementById("title0");
const title = document.getElementById("title");
const titlex = document.getElementById("titlex");
const title2 = document.getElementById("title2");
const button = document.querySelector("#btn");
const input = document.querySelector("#input");


let bingo = 50;
let max;
let min;
button.addEventListener("click", function () {
    const num = input.value;
    if (num < 1 || num > 100) {
        title.innerText = "白癡?";
        titlex.innerText = null;
        title2.innerText = null;
        return;
    }
    if (num > max || num < min) {
        title.innerText = "智障?";
        titlex.innerText = null;
        title2.innerText = null;
        return;
    }

    if (num > bingo) {
        title2.innerText = num;
        max = num;
    } else if (num < bingo) {
        title.innerText = num;
        min = num;
    }
    else {
        title.innerText = bingo;
        titlex.innerText = null;
        title2.innerText = null;
        title0.innerText = "棒!";
    }
    input.value = null;
});