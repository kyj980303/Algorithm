function solution(emergency) {
    let sort = emergency.slice().sort((a,b) => b - a);
    return emergency.map(z => sort.indexOf(z) + 1);
}
