var action = ['walk', 'mow', 'clean', 'wash', 'take out', 'pick up', 'fold', 'set', 'mop', 'cook', 'vacuum'];
var chore = ['dog', 'lawn', 'kitchen', 'dishes', 'trash', 'dog poop', 'laundry', 'table', 'floor', 'dinner', 'carpet'];

let actionRand = function () {
    return Math.floor(Math.random() * (action.length - 1))
};

let choreRand = function () {
    return Math.floor(Math.random() * (chore.length - 1))
};

document.getElementById("excuse").addEventListener("click", function (event) {
    document.getElementById("name-do").textContent = action[actionRand()];
    document.getElementById("name-thing").textContent = chore[choreRand()];
});