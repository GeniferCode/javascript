function fat(n) {
    fatorial = 1
    for (var c = n; c > 0; c--) {
        fatorial *= c
    }
    return fatorial
}

console.log(fat(5))