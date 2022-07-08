const container = document.querySelector('#container');

//loop to create divs that will comprise 16x16 grid, add class "boxes" and 
//individual ID (tie to i), and append to container
for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'boxes');
    newDiv.setAttribute('id', `box${i+1}`);
    container.appendChild(newDiv);
}


//dictate size of boxes
const boxes = document.querySelectorAll('.boxes');
boxes.forEach((box) => {
    box.style.backgroundColor = 'lightgray';


    //turn box from lightgray to gray on hover
    box.addEventListener('mouseenter', () =>{
        box.style.backgroundColor = 'gray';
        box.style.width = 'auto';
    });
})
