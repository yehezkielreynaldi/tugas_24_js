function sortir() {
    let deretAngka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    console.log(`Sebelumnya : ${deretAngka}`);

    deretAngka = deretAngka.sort();

    console.log(`Ascending : ${deretAngka}`);

    return `Descending : ${deretAngka.reverse()}`

}

console.log(sortir());

