const inputel = document.getElementById('main-input');
const mainbtn = document.getElementById('addbtn');
const ul = document.getElementById('ul');
var taskcompleted = document.getElementById('task-comp-score');
var taskuncompleted = document.getElementById('task-uncomp-score')

let count = []

function createelement() {
    var li = document.createElement('li')
    var litxt = document.createTextNode(inputel.value)
    var img = document.createElement('img')

    if (inputel.value.length > 0 && inputel.value.length > 3) {
        img.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMwZjY0YTMiIGQ9Ik03IDIxcS0uODI1IDAtMS40MTItLjU4N1Q1IDE5VjZINFY0aDVWM2g2djFoNXYyaC0xdjEzcTAgLjgyNS0uNTg3IDEuNDEzVDE3IDIxek0xNyA2SDd2MTNoMTB6TTkgMTdoMlY4SDl6bTQgMGgyVjhoLTJ6TTcgNnYxM3oiLz48L3N2Zz4=";
        img.classList.add('imgstyle')
        li.append(litxt)
        li.append(img);
        ul.appendChild(li)
        inputel.value = ''
        count.push(li);

        //& uncompleted list condition
        const checkeditems = Array.from(count).filter(
            item => !item.classList.contains('checked'));
        taskuncompleted.textContent = checkeditems.length

    } else {
        alert("⚠ Enter the value more than 3 characters !!!!!!!");
    }

    li.addEventListener('click', (event) => {
        if (event.target.localName === "li") {
            li.classList.toggle('checked');
            let taskcondition = event.target.classList.value === "checked";
            let task_null_condition = event.target.classList.value === "";

            //! click event to increase and decrease the taskcompleted and uncompleted count
            if (taskcondition) {
                taskcompleted.textContent++
                taskuncompleted.textContent--
            } else if (task_null_condition) {
                taskcompleted.textContent--
                taskuncompleted.textContent++

            }
        }
    })

    img.addEventListener('click', (event) => {
        li.remove();
        count.pop();
        console.log(count, "remove");
        let removecondition = event.target.parentNode.className === "checked";
        let removeconditionnull = event.target.parentNode.className === "";

        //* terrnary condtion to delete count in the taskcompleted and uncompleted

        let removeelements_checked =
            removecondition ? taskcompleted.textContent-- : null;
        let removeelements_unchecked =
            removeconditionnull ? taskuncompleted.textContent-- : null

        return removeelements_checked, removeelements_unchecked;
    })


}

mainbtn.addEventListener('click', createelement);

inputel.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        inputel.style.borderColor = "0f64a3"
        createelement();
    }
})


