const div = document.createElement('div')
const ul = document.createElement('ul')

const item1 = document.createElement('li')
const item2 = document.createElement('li')

const a1 = document.createElement('a')
const a2 = document.createElement('a')

a1.textContent = 'наш инстаграм'
a1.href = 'https://instagram.com/intocode'

a2.textContent = 'наш сайт'
a2.href = 'https://intocode.ru'

item2.append(a2)
item1.append(a1)

ul.append(item1, item2)

div.append(ul)

document.body.prepend(div)

console.log(div);





