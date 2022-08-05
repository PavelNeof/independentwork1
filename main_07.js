//1. Реализуйте функцию, которая принимает параметром подсторку,
// число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

const repeatString = (string, number, a) => {
    let arr = [];
    for (let i = 0; i < number; i++) {
        arr.push(string)
    }
    return arr.join(a)
}


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const checkStart = (a, b) => {
    let newA = a.slice(0, 3);
    return newA.toUpperCase() === b.toUpperCase();
}


//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (string, number) => {
    return string.slice(0, number) + '...'
}


//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

const getMinLengthWord = (word) => {
    if (word === '') {
        return null
    } else {
        let splits = word.split(' ');
        let res = splits.reduce((acc, el) => el.length > acc.length ? acc : el)
        return res
    }
}


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (string) => {
    let stringNew = string.toLowerCase().split(' ')
    let array = [];
    for (let i = 0; i < stringNew.length; i++) {
        let a = stringNew[i].split('');
        let newA = a[0].toUpperCase();
        a.splice(0, 1, newA)
        let arr = a.join('')
        array.push(arr)

    }
    return array.join(' ')
}

//6. Реализуйте функцию, котрая принимает параметрами две строки. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает fasle. Проверка проводится без учёта регистра.
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// every()

const isIncludes = (first, second) => {
    let newFirst = first.toUpperCase().split('')
    let newSecond = second.toUpperCase().split('')
    let arr = [];
    for (let i = 0; i < second.length; i++) {
        for (let j = 0; j < first.length; j++){
            newSecond[i] === newFirst[j]
        }
            arr.push(newFirst.includes(newSecond[i]))
    }
    return !arr.includes(false);

}



