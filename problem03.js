
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