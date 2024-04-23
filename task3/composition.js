// Point-free style and composition

// Get full Username
const getFullName = (person) => {
    return `${person.firstName} ${person.lastName}`;
}

// Unique words
const getWordsOfText = (text) => {
    return text.split(' ');
}

const filterUniqueValues = (values) => {
    return values.filter((word, index, array) => array.indexOf(word) === array.lastIndexOf(word));
}

const sortAlphabetically = (values) => {
    return values.sort();
}

const filterUniqueWords = (text) => {
    if (typeof text !== 'string') {
        throw new Error('Input value must be a string to operate this');
    }
    return sortAlphabetically(filterUniqueValues(getWordsOfText(text)))
};

// Average Grades
const getTotalGrades = (students) => {
    return students.reduce((total, student) =>
        total + student.grades.reduce((currentValue, grade) => currentValue + grade, 0), 0);
}

const countAllGrades = (students) => {
    return students.length * students[0].grades.length;
}

const calculateAverageGrade = (totalGrades, numberOfGrades) => {
    return totalGrades / numberOfGrades;
}

const getAverageGrade = (students) => {
    return calculateAverageGrade(getTotalGrades(students), countAllGrades(students));
}

// Tests
const person = { firstName: 'Alex', lastName: 'Johnson' };
console.log(`Person: ${getFullName(person)}`);

const wordsData = 'alarm clock zebra zoo zoo lock one second one third second fifth second';
const fakeData = ['one', 2, 22];

console.log(`\nGiven: ${wordsData}\nUnique: ${filterUniqueWords(wordsData)}\n`);
console.log(`\nGiven: ${fakeData}\nUnique: ${filterUniqueWords(fakeData)}\n`);

const students = [
    { name: 'Alice', grades: [85, 90, 88] },
    { name: 'Bob', grades: [75, 80, 82] },
    { name: 'Charlie', grades: [90, 92, 88] },
    { name: 'Melanie', grades: [50, 70, 90] },
    { name: 'Donald', grades: [55, 65, 70] },
];

console.log(`Students average score data: ${getAverageGrade(students).toFixed(2)}`);
