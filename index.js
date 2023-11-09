const container = document.getElementById('container')

const paraOne = document.createElement('p');
paraOne.textContent = "Hey I'm red!";

const paraTwo = document.createElement('p');
paraOne.textContent = "ME TOO!";

const hThree = document.createElement('h3');
hThree.textContent = "I'm a blue h3";

const div = document.createElement('div');
div.style.cssText = 'border-style: solid; border-color: black; background: pink;'

const hOne = document.createElement('h1');
hOne.textContent = "I'm in a div";

const btn = document.querySelector('#btn');
// btn.onclick = () => alert('Hello World');
btn.addEventListener('click', () => {
    alert('Hello World');
});

function changeColor() {
    (( btn.style.cssText == "background: red;")
    ? (btn.style.cssText = "background: gray;") 
    : (btn.style.cssText = "background: red;"));
};

btn.addEventListener('click', changeColor);
// btn.addEventListener('click', () => {
//     (( btn.style.cssText == "background: red;")
//         ? (btn.style.cssText = "background: gray;") 
//         : (btn.style.cssText = "background: red;"));
// });

btn.addEventListener('click', function (e) {
    console.log(e.target);
});


container.appendChild(paraOne);
container.appendChild(hThree);
div.appendChild(hOne);
div.appendChild(paraTwo);
container.appendChild(div);









