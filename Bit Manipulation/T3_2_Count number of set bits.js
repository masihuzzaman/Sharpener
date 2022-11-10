const bitCount = num => {
    let sum = 0;
    while (num) {
        sum += num & 1;
        num = num >> 1;
    }
    console.log(sum);
    return sum;
};

bitCount(13)

