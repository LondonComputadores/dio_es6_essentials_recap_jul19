const students = [
    {
        name: "Manu",
        grade: 7
    },

    {
        name: "Dúia",
        grade: 4
    },

    {
        name: "Jeniffer",
        grade: 10
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de Alunos:');
console.log(students);

