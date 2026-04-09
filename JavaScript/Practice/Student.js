// Array of student objects with name and score properties
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
];
const names = students.map(s => s.name);
console.log(names);
const studentsWithGrade = students.map(s => ({
    name: s.name,
    score: s.score,
    grade: s.score >= 90 ? 'A' : s.score >= 80 ? 'B' : s.score >= 70 ? 'C' : 'D'
}));

console.log(studentsWithGrade);