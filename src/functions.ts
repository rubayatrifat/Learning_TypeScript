function demoFunc(nm: string, cb: (value: string) => void): void {
  cb("hlw");
}

demoFunc("Rubayat Rifat", (value: string) => {
  console.log(value);
});

// Optional and Default Parameters

function greetUser(userName: string = "user") {
  console.log(`Hello ${userName}`);
}

greetUser();

// Rest Parameters

function restOp(...arr: number[]) {
  console.log(arr);
}

restOp(1, 2, 3, 4, 5, 6, 7, 8);

