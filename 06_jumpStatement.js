// break
for (let index = 0; index <= 20; index++) {
    console.log(index);
    if (index ==10) {
        break;
    }
    console.log("Logged index value");
}
console.log(`================================================`);
// continue
for (let index = 0; index <= 20; index++) {
    console.log(index);
    if (index ==10) {
        continue;
    }
    console.log("Logged index value");
}