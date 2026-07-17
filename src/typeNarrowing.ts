// Type Narrowing

function findUser(identity: string | number) {
    if (typeof findUser === "string") {
        return `User name is ${identity}`
    }

    return `User id is ${identity}`
}

// Finding out with truthiness

function userMsg(msg?: string) {
    if(msg) {
        return `The msg is ${msg}`
    }

    return "There is no msg"
}


// exhaustive check 

function orderPizza(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `Take ur ${size} pizza!!`
    } else if (size === "medium") {
        return `Take ur ${size} pizza!!`
    } else if (size === "large") {
        return `Take ur ${size} pizza!!`
    }

    return `Take ur ${size}inch pizza!!`
}