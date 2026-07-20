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
