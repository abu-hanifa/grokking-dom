const aray = ["html", "css", 'js']

const ul = document.createElement('ul')

for (let i = 0; i < aray.length; i++) {
    const li = document.createElement('li')
    li.append(aray[i])
    ul.append(li)
}

document.body.prepend(ul)
console.log(ul);





