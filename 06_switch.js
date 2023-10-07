var displayDay=function(numDay){
switch (numDay) {
    case 1:
        console.log(`Monday`);
        break;
        case 2:
        console.log(`Tuesday`);
        break;
        case 3:
        console.log(`Wed`);
        break;
        case 4:
        console.log(`Tus`);
        break;
        case 5:
        console.log(`Friday`);
        break;
        case 6:
        console.log(`Sat`);
        break;
        case 7:
        console.log(`Sun`);
        break;
    default:
        console.log(`Invalid Data : ${numDay}`);
        break;
}
}
displayDay(1);
displayDay(6);
displayDay(4);
displayDay(11);
