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
    var buffer2 == base;
    if (base % 2 == 0) {
        while (base % 2 == 0 && base != 2) {
            base /= 2;
        }
    }
    var buffer3 == base;
    if (base % 3 == 0) {
        while (base % 3 == 0 && base != 3) {
            base /= 3;
        }
    }
    var buffer5 == base;
    if (base % 5 == 0) {
        while (base % 5 == 0 && base != 5) {
            base /= 5;
        }
    }
    var buffer7 == base;
    if (base % 7 == 0) {
        while (base % 7 == 0 && base != 7) {
            base /= 7;
        }
    }
    var buffer11 == base;
    if (base % 11 == 0) {
        while (base % 11 == 0 && base != 11) {
            base /= 11;
        }
    }
    var buffer13 == base;
    if (base % 13 == 0) {
        while (base % 13 == 0 && base != 13) {
            base /= 13;
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

    function getBasePow(buffer, base, res) {
        if (buffer == Math.pow(base, 2)) {
            res /= 2;
        }
        if (buffer == Math.pow(base, 3)) {
            res /= 3;
        }
        if (buffer == Math.pow(base, 4)) {
            res /= 4;
        }
        if (buffer == Math.pow(base, 5)) {
            res /= 5;
        }
        if (buffer == Math.pow(base, 6)) {
            res /= 6;
        }
        if (buffer == Math.pow(base, 7)) {
            res /= 7;
        }
        if (buffer == Math.pow(base, 8)) {
            res /= 8;
        }
        return res;
    }
    if (base == 2) {
        res = getBasePow(buffer2, base, res);
    }
    if (base == 3) {
        res = getBasePow(buffer3, base, res);
    }
    if (base == 5) {
        res = getBasePow(buffer5, base, res);
    }
    if (base == 7) {
        res = getBasePow(buffer7, base, res);
    }
    if (base == 11) {
        res = getBasePow(buffer11, base, res);
    }
    if (base == 13) {
        res = getBasePow(buffer13, base, res);
    }
    return res;
}