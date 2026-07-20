const a: any = "Hello";
/// a. -- not getting any suggestion
// (a as string).includes("a")  -- got suggestion
// (<string>a).includes("b")  -- also go suggestion


const strNum = "334"
console.log(typeof Number(strNum))

