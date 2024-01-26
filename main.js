const inputel = document.getElementById('main-input');
const mainbtn = document.getElementById('addbtn');
const ul = document.getElementById('ul')
const li = document.querySelector('li')


function createelement() {
    if (inputel.value.length > 0) {
        var li = document.createElement('li')
        var litxt = document.createTextNode(inputel.value)
        var img = document.createElement('img')
        img.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMwZjY0YTMiIGQ9Ik03IDIxcS0uODI1IDAtMS40MTItLjU4N1Q1IDE5VjZINFY0aDVWM2g2djFoNXYyaC0xdjEzcTAgLjgyNS0uNTg3IDEuNDEzVDE3IDIxek0xNyA2SDd2MTNoMTB6TTkgMTdoMlY4SDl6bTQgMGgyVjhoLTJ6TTcgNnYxM3oiLz48L3N2Zz4=";
        img.classList.add('imgstyle')
        li.append(litxt)
        li.append(img);
        ul.appendChild(li)
        inputel.value = ''
    }

    li.addEventListener('click', (event) => {
        if (event.target.localName === "li") {
            li.classList.toggle('checked');
        }
    })

    img.addEventListener('click', () => {
        li.remove();
    })


}


mainbtn.addEventListener('click', createelement);

inputel.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        inputel.style.borderColor = "0f64a3"
        createelement();
    }
})

