// Point-free style and composition

const getFullName = (person) => {
    return `${person.firstName} ${person.lastName}`;
}

const filterUniqueWords = (text) => {
    const uniqueWordsSet = new Set(text.split(' '));
    const uniqueWordsArray = Array.from(uniqueWordsSet).sort();
    return uniqueWordsArray;
};

const getAverageGrade = (students) => students.reduce((total, student) =>
    total + student.grades.reduce((currentValue, grade) => currentValue + grade, 0), 0) / (students.length * students[0].grades.length);

const person = { firstName: 'Alex', lastName: 'Johnson' };
console.log(`Person: ${getFullName(person)}`);

const wordsData = 'one second one third second fifth second';
console.log(`\nGiven: ${wordsData}\nUnique: ${filterUniqueWords(wordsData)}\n`);

const students = [
    { name: 'Alice', grades: [85, 90, 88] },
    { name: 'Bob', grades: [75, 80, 82] },
    { name: 'Charlie', grades: [90, 92, 88] }
];
console.log(`Students average score data: ${getAverageGrade(students).toFixed(2)}`);