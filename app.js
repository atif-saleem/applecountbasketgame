let basketOneText = document.querySelector(".basket1 span");
let basketTwoText = document.querySelector(".basket2 span");
let rightarrow = document.querySelector(".rightarrow");
let leftarrow = document.querySelector(".leftarrow");
const totalApple = 10;
basketTwoAppleCount = 0;
let firstBasketAppleCount = totalApple - basketTwoAppleCount;

basketTwoText.innerText = basketTwoAppleCount;
basketOneText.innerText = firstBasketAppleCount;
rightarrow.addEventListener("click", () => {
  if (firstBasketAppleCount > 0) {
    firstBasketAppleCount--;
    basketOneText.innerText = firstBasketAppleCount;
    basketTwoAppleCount++;
    basketTwoText.innerText = basketTwoAppleCount;
  }
});
leftarrow.addEventListener("click", () => {
  if (basketTwoAppleCount > 0) {
    firstBasketAppleCount++;
    basketOneText.innerText = firstBasketAppleCount;
    basketTwoAppleCount--;
    basketTwoText.innerText = basketTwoAppleCount;
  }
});
