//#1
let star = "";

for (i = 0; i < 4; i++) {
  star = "";
  for (j = 0; j <= i; j++) {
    star += "* ";
  }
  console.log(star);
}

//#2

const arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (let i = 0; i < arr.length; i++) {
  console.log(`row ${i}`);
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

//#3
let num = "";

for (let i = 1; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    num += i + " ";
  }
}

console.log(num);

let num2 = "";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= 4; j++) {
    num2 += j + " ";
  }
}

console.log(num2);

//Bonus

let num3 = "";
let num4 = "";

for (let i = 0; i < 1; i++) {
  for (let j = 1; j < 3; j++) {
    for (let k = 1; k <= 4; k++) {
      num3 += j + " ";
    }
  }

  for (let p = 0; p < 3; p++) {
    for (let q = 0; q <= 4; q++) {
      num4 += q + " ";
    }
  }
}

console.log(num3);
