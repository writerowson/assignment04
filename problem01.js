// problem 01
function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'plz enter a valid number'
    }
    var vori = ana / 16;
    return vori;
}
let totalVori = anaToVori(80);
// let totalVori = anaToVori('80');
console.log(totalVori)






// problem 02
function pandaCost(singara, somusha, jilapi) {
    if (typeof (singara, somusha, jilapi) != 'number') {
        return "Plz enter a valid number"
    }
    const perSingara = 7;
    const perSomusha = 10;
    const perJilapi = 15;
    // items calculations
    const totalSingaraPrice = singara * perSingara;
    const totalSomusaPrice = somusha * perSomusha;
    const totaJilapiPrice = jilapi * perJilapi
    const totalFoodPrice = totalSingaraPrice + totalSomusaPrice + totaJilapiPrice;
    return totalFoodPrice;
}
var totalCost = pandaCost(1, 7, 1);
// var totalCost = pandaCost([1, 7, 1]);
console.log(totalCost);






// problem 03
function picnicBudget(members) {
    if (typeof members != 'number') {
        return "please input valid numbers"
    }
    const firstPosition = 5000;
    const secondPosition = 4000;
    const remaining = 3000;
    if (members <= 100) {
        const first100positions = members * firstPosition;
        return first100positions;
    }
    else if (members >= 100 && members <= 200) {
        const first100positions = 100 * firstPosition;
        const otherMembers = members - 100;
        const second100positions = secondPosition * otherMembers;
        const totalExpenses = first100positions + second100positions;
        return totalExpenses;
    }
    else {
        const first100positions = 100 * firstPosition;
        const second100positions = 100 * secondPosition
        const otherMembers = members - 200;
        const remainingPositions = remaining * otherMembers;
        const totalExpenses = first100positions + second100positions + remainingPositions;
        return totalExpenses;
    }
}
var members = picnicBudget(2200);
// var members = picnicBudget('2200');
console.log(members);






// problem 04
function oddFriend(friend) {
    if (typeof friend == "number") {
        return "Please input string"
    }
    for (i = 0; i <= friend.length; i++) {
        if (friend[i].length % 2 == 1) {
            console.log(friend[i].length)
            return friend[i];
        }
    }
}
var friendsName = ["mina", "tina", "tanjila", "tania", "sonia", "sumi", 'shuki'];
// var friendsName = (56, 67, 45, 77);
let friends = oddFriend(friendsName);
console.log(friends);