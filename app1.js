/* // Theory

// const array = [1, 2, 3, 5, 20, 42, 111]
// // const arrayStrings = ['a','b','c', null, 12 ]
// // const array = new Array(1, 2, 3, 5, 20, 42)

// // console.log (array.length)
// console.log(array[1])
// console.log(array[array.length - 1]) //array[6]
// array[0] = 'Privet'
// console.log(array[0])
// array[array.length] = 'becon'
// console.log(array)
*/
const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)

// const notes = ['Записать блог про массивы', "Рассказать теоррию объектов"]

// function render () {
//     // for (let i = 0; i < notes.length; i++) {
//     // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // }

//     for(let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }

// render()

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0) {
//         return

//     }
//     // listElement.innerHTML = 
//     listElement.insertAdjacentHTML('beforeend',
//         getNoteTemplate(inputElement.value)
        
//      )
//      inputElement.value = ''
// }

// function getNoteTemplate (title) {
//     return `
//     <li
//             class="list-group-item d-flex justify-content-between align-items-center"
//         >
//             <span>${title}</span>
//             <span>
//                 <span class="btn btn-small btn-success">&check;</span>
//                 <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//         </li>
//     `
// }
    /**
     * Object Theory
    
const person = {
    firstName: 'Vladimir ',
    lastName: 'Volkov',
    year: 2000,
    hasGirlfriend: true,
    languages: ['ru', 'en'],
    getFullName: function () {
        console.log(person.firstName + '' + person.lastName)
    }
}
console.log(person.year)
console.log(person['languages'])
const key = 'hasGirlfriend'
console.log(person[key])
person.hasGirlfriend = false
console.log(person[key])
person.getFullName()
console.log (typeof notes)
*/

const notes = [
    {
        title: 'Задача № 1',
        compleated: false,
    }, 
    {
        title: 'Задача № 2',
        compleated: true,
    }, 
]

function render () {
    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
}
render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        compleated: false,
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}

listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle'){
            notes[index].compleated = !notes[index].compleated
            console.log('toggle', index)
        } else if (type === 'remove'){
          notes.splice(index, 1)
    }

    render()
}
}

function getNoteTemplate (note, index) {
    console.log(note.compleated)
    return `
    <li
            class="list-group-item d-flex justify-content-between align-items-center"
        >
            <span class="${note.compleated ? 'text-decoration-line-through' :  ''}">${
            note.title}
            </span>
            <span>
                <span class="btn btn-small btn-${
                    note.compleated ? 'warning' : 'success'
                }" data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-type="remove"
                data-index="${index}" >&times;</span>
            </span>
        </li>
    `
}
