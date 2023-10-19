const map = new Map();
map.set(11, "Dada");
map.set(22, "Bill");
map.set(33, "Elon");
map.set(44, "Stew");
map.set(55, "Jenny");
console.log(typeof map);
console.log(map);
console.log(map.get(33));
map.set(22, "Dada");
console.log(map);
map.set(66, "Shree");
console.log(map);
console.log(`Total Element in map is : ${map.size}`);
map.delete(33);
console.log(map);
console.log(map.has(22));
console.log(map.has(33));

console.table(map);



console.log(map.values());

// Traversing map
const keys = map.keys()
console.log(keys);
for (const key of keys) {
map.get(key);
console.log(key, map.get(key));
}



