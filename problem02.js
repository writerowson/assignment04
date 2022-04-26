function pandaCost(singara, somusha, jilapi) {
    if (typeof (singara, somusha, jilapi) != 'number') {
        return "Plz enter a valid number"
    }
    // if (singara, somusha, jilapi <= "object") {
    //     return "plz enter a positive number"
    // }
    //  per items price
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