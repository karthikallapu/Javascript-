function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

let numbers = [41, 12, 8, 16, 4];
let sortedDescending = sortDescending(numbers);

console.log("Sorted in descending order:", sortedDescending);
