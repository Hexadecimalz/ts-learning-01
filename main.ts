

function processValue(something: unknown): unknown
{
    let result: unknown;
    if (typeof something === "string"){
        result = something.toUpperCase();
    }
    else if (typeof something === "number") {
        result = something * 10;
    }
    else if (typeof something === "boolean") {
        result = something ? "yes" : "no";
    }
    else {
        result = "Unhandled type"
    }
    return result;
};

console.log(processValue(99));      // 990
console.log(processValue("bob"));   // BOB
console.log(processValue(true));    // yes
console.log(processValue(false)); // no
console.log(processValue(null));    // Unhandled type
