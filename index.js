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

const buttons = document.querySelectorAll('button');
// btn.onclick = () => alert('Hello World');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(`You Clicked Button ${button.id}`);
    });
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.cssText == "background: red;"
        ? (button.style.cssText = "background: gray;")
        : (button.style.cssText = "background: red;");
    });
});

// function changeColor() {
//     (( btn.style.cssText == "background: red;")
//     ? (btn.style.cssText = "background: gray;") 
//     : (btn.style.cssText = "background: red;"));
// };

// btn.addEventListener('click', changeColor);
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









