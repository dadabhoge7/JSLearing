function show(n1, n2, ...arg){
    console.log(arg, n1);
    for (const element of arg) {
        console.log(element);
    }
}
show(100, 200, 300, 400, 500);