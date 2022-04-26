function oddFriend(friend) {
    if (typeof friend == "number") {
        return "Please input a string"
    }
    for (i = 0; i < friend.length; i++) {

        if (friend[i].length % 2 == 1) {
            console.log(friend[i].length)
            return friend[i];
        }
    }
}
// var friendsName = ["mina", "tina", "tanjila", "tania", "sonia", "sumi", 'shuki', 'soni', 'nipa', 'nila']
var friendsName = ([56, 67, 45, 77]);
let friends = oddFriend(friendsName)
console.log(friends);