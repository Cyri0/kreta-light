function generateWrapper(nev,osztaly,jegyek){
    jegyDOM = ""

    jegyek.forEach(jegy => {
        jegyDOM += `<span title="Fizika - 2023.11.16.">${jegy}</span>`
    });

    return `
    <div class="wrapper">
        <div>${nev}</div>
        <div>${osztaly}</div>
        <div>
            ${jegyDOM}
        </div>
    </div>`
}

document.body.innerHTML += generateWrapper("Nemes Tamás", "9.B",[5,2,5,4,5])
document.body.innerHTML += generateWrapper("Nemes Tamara", "11.B",[2,2,2,4,5])