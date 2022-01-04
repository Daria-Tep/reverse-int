module.exports = function reverse(n) {
    if (n < 0) { n = -n };
    let arr = n.toString().split("");
    let res = [];



    for (let i = 0; i < arr.length; i++) {
        res.unshift(arr[i])
    }


    return +(res.join(""))

}