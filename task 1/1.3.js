function smallest(num, min) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] < min) {
            min = num[i];
        }
    }

    return min;

}
console.log(smallest([-2, -3, 66], -1));