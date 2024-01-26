const inputel = document.getElementById('main-input');
const mainbtn = document.getElementById('addbtn');
const ul = document.getElementById('ul')
let lis = []

function createelement() {
    if (inputel.value.length > 0) {
        var li = document.createElement('li')
        var litxt = document.createTextNode(inputel.value)
        li.append(litxt)
        ul.appendChild(li)
        inputel.value = ''
    }
    li.addEventListener('click', (event) => {
        if (event.target.localName === "li") {
            li.classList.toggle('checked');
        }
    })
}


mainbtn.addEventListener('click', createelement);

inputel.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        inputel.style.borderColor = "0f64a3"
        createelement()
    }
})

