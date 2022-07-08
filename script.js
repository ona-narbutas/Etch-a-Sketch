const container = document.querySelector('#container');
let userInput = document.querySelector('button');
const boxes = document.querySelectorAll('.boxes');

//loop to create divs that will comprise 16x16 grid, add class "boxes" and 
//individual ID (tie to i), and append to container

function createBoxes(res) {
    for (let i = 0; i < (res * res); i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'boxes');
        container.appendChild(newDiv);

        boxes.forEach((box) => {
            box.style.backgroundColor = 'lightgray';
            box.style.height = 'auto';
            box.style.width = 'auto';

            //turn box from lightgray to gray on hover
            box.addEventListener('mouseenter', () =>{
                box.style.backgroundColor = 'gray';
            });
        });
    }
}

createBoxes(16);



//get number of pixels from user and adjust grid accordingly
userInput.addEventListener('click', () => {
    container.style.gridTemplateColumns = `${getAutos(userInput)}`;
    container.style.gridTemplateRows = `${getAutos(userInput)}`;

    boxes.forEach(box, () => {
        container.removeChild(box);
    })
    createBoxes(userInput);
})

//convert user input into correct number of "autos" necessary to 
//control gridTemplateColumns and gridTemplateRows;
function getAutos(input) {
    let output = '';
    for (let i = 0; i < (input); i++) {
        output += 'auto ';
    }
    return output;
}