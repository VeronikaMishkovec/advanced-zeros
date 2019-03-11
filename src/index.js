module.exports = function getZerosCount(number, base) {
    // your implementation
    var simpleNumb = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251]
    var res = 0;
    var j = 1;
    for (var i = 0; i <= simpleNumb.length; i++) {
        if (base == simpleNumb[i]) {
            while (Math.pow(simpleNumb[i], j) < number) {
                res += Math.floor(number / Math.pow(simpleNumb[i], j));
                j++;
            }
        }

    }

    if (base % 2 == 0) {
        while (base % 2 == 0) {
            base /= 2;
        }
    }
    if (base % 3 == 0) {
        while (base % 3 == 0) {
            base /= 3;
        }
    }
    if (base % 5 == 0) {
        while (base % 5 == 0) {
            base /= 5;
        }
    }
    for (var i = 0; i <= simpleNumb.length; i++) {
        if (base == simpleNumb[i]) {
            while (Math.pow(simpleNumb[i], j) < number) {
                res += Math.floor(number / Math.pow(simpleNumb[i], j));
                j++;
            }
        }
    }


    return res;
}