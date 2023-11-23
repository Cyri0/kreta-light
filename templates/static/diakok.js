function generateWrapper(nev,osztaly,jegyek){
    jegyDOM = ""

    jegyek.forEach(jegy => {
        jegyDOM += `<span title="${jegy.subject} - ${jegy.date}">${jegy.value}</span>`
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

function generateOption(id, name){
    let o = `<option value="${id}">${name}</option>`
    document.getElementById("diak").innerHTML += o
}

fetch('diakok/')
.then(res => res.json())
.then(students => {
    console.log(students);
    students.forEach( student => {
        let school_class = `${student.school_class.grade}.${student.school_class.code}`

        generateOption(student.id, student.name)

        document.body.innerHTML += generateWrapper(student.name, school_class, student.grades)
    } )
})