
var voteEligible = function(age){
    var result = +age;
    if ( age==0 || age<0 || age > 130 || age==null || isNaN(result)) {
        
        console.log(`Invalid Data : ${age}`);
    }
    else{
        if (age < 18) {
            console.log(`Yor are Not Eligible for vote : ${age}`);
        } else {
            console.log(`You are Eligible for vote : ${age}`);
        }
    }
}
voteEligible(20);
voteEligible(17);
voteEligible(8);
voteEligible("Jenny");
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);   