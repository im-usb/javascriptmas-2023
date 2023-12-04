const candy = document.getElementById("candy");
const children = document.getElementById("children");
const form = document.getElementById("divideForm");
const result = document.getElementById("result");
form.addEventListener("submit", calcTotalCandies);

function calcTotalCandies(event) {
  /** Challenge:
   * Some children have got some pieces of candy. They
   * want to eat as much candy as they can but each
   * child must eat exactly the same amount. Determine
   * how many pieces of candy can be eaten altogether.
   * A piece of candy can not be split.
   *
   * Example:
   * Children: 3, Candies: 10
   * Each of the 3 children can eat 3 candies.
   * So the total number of candies that can be eaten
   * is 3*3 = 9. So the function calcTotalCandies should
   * log out 9.
   **/
  event.preventDefault();
  let candyPerChild;
  let candies = parseInt(candy.value);
  let childrenCount = parseInt(children.value);

  if (candies >= childrenCount) {
    candyPerChild = Math.floor(candies / childrenCount);
    result.value =
      candyPerChild * childrenCount + " candies can be evenly distributed";
    // No. of candies evenly distributed
  } else {
    result.value = "Insufficient Number Of Candies";
    result.style.color = "rgb(255 12 12)";
  }
}
