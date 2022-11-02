// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
const destructivelyAppendCat=(name)=>{
    cats.push(name)
};
const destructivelyPrependCat=(name)=>{
    cats.unshift(name)
};
const destructivelyRemoveLastCat=(name)=>{
    cats.pop(name);
};
const destructivelyRemoveFirstCat=(name)=>{
    cats.shift(name)
};

const appendCat=(name)=>{
    const arr=[...cats];
    arr.push(name);
    return arr
};
const prependCat=(name)=>{
    const arr=[...cats];
    arr.unshift(name)
    return arr
};
const removeLastCat=(name)=>{
    const arr=[...cats];
    arr.pop(name)
    return arr
};
const removeFirstCat=(name)=>{
    const arr=[...cats];
    arr.shift(name)
    return arr
}