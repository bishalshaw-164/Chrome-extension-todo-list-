document.getElementById("myBtn").addEventListener("click", function () {
    let input = document.getElementById('input').value;
    let err = document.getElementById('err').innerHTML = ""

    if (input == '') {
        let err = document.getElementById('err').innerHTML = "Please Enter Some Task"
    } else {

        let list = document.getElementById('box');
        let img = document.createElement('img')
        img.src= 'icons.png';
        img.className ='remove'
        // let a = document.createElement('a');
        // a.textContent = "X";
        // a.href = "javascript:void(0)";
        // a.className = "remove"

        let li = document.createElement('li');
        li.textContent = input;
        box.appendChild(li);
        li.appendChild(img);
    }
    document.getElementById('input').value = "";
});
let del = document.querySelector("ul");

del.addEventListener('click', (e) => {
    let list = document.getElementById('box');
    let li = e.target.parentNode;
    list.removeChild(li);
})