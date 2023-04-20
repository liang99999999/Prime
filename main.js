const ans = document.querySelector("#ans")
const input = document.querySelector("#input")
const button = document.querySelector("#button")


button.addEventListener("click", function () {
    let num = input.value;
    let arr = [];
    if(num == 1){
        ans.innerHTML = "1 不是質數";
    }
    if(num ==2){
        ans.innerHTML = "2";
        return;
    }
    if(num<=0){
        ans.innerHTML = "輸入錯誤!";
    }

    for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0 && i!==j) {
                break;
            } else if (j === i - 1 || j === i) {
                arr.push(2);
                arr.push(i);
            }
        }
        ans.innerHTML = arr;
    }
});