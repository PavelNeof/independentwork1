
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

console.log(user === copyUser)
console.log(user.friends == copyUser.friends)

//2. Полная (глубокая) копия объекта user
let deepCopyUser = JSON.parse(JSON.stringify(user));
//Проверка:
console.log(user === deepCopyUser) //- что должно быть в консоли?
console.log(user.friends === deepCopyUser.friends) //- что должно быть в консоли?


//3. Поверхностная копия массива students
let copyStudents = {...students};
console.log(copyStudents === students)
//Проверка:
//console.log(copyStudents === students); -// что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(el => el);
console.log(deepCopyStudents)
console.log(deepCopyStudents === students)


//Проверка:
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
//  console.log('?')
let sortedByName = deepCopyStudents.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => a.scores > b.scores ? -1 : 1);
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(el => el.scores >= 100);
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// let deepCopyStudents2 = deepCopyStudents.map(el => el)
let topStudents = deepCopyStudents.splice(0, 3);
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = newDeepCopyStudents.filter(el => !el.isMarried);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = newDeepCopyStudents.map(el => el.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(' ');
console.log(namesWithSpace)
let namesWithComma = studentsNames.join(',');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = newDeepCopyStudents.map(el => ({...el, isStudent: true}))
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = newDeepCopyStudents.map(el => el.name === "Nick" ? {...el, isMarried: true} : el);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = newDeepCopyStudents.find(el => el.name === 'Ann');
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = newDeepCopyStudents.reduce((acc, el) => el.scores < acc.scores ? acc : el);
console.log(bestStudent)

let sumScores = (a) => {
    let arr = a;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].scores > arr[i + 1].scores) {
            return arr[i]
        }
    }
}
console.log(sumScores(newDeepCopyStudents))

//13. Найдите сумму баллов всех студентов (reduce)
let sum = newDeepCopyStudents.reduce((acc, el) => acc + el.scores, 0)
console.log(sum)
// И поднимаем руку!!!!


// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (a) => {
    a = students
    let newArr = [];
    for (let i = 0; i < a.length; i++) {
        //фильтрую массив студентов, убираю объект с текущем именем
        const b = a.filter((el) => el.name != a[i].name);
        //делаю из это массива массив имён
        const n = b.map((el) => el.name);
        // добавляю этот массив свойству friends, как его значение
        const arr = a.map((el) => ({...el, friends: n}));
        newArr.push(arr)
    }

    return (newArr)
}
console.log(addFriends(students));
