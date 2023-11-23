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

// 

fetch('diakok/')
.then(res => res.json())
.then(students => {
    console.log(students);

    students.forEach( student => {
        let name = student.name
        let school_class = `${student.school_class.grade}.${student.school_class.code}`

        // let grades = []
        // student.grades.forEach( grade => {grades.push(grade.value)} )

        document.body.innerHTML += generateWrapper(name, school_class, student.grades)

    } )
})