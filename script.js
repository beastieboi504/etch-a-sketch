let container = document.querySelector('.container');
let gridBtn = document.querySelector('#grid-btn');
let colorPick = document.querySelector('#color-picker');
let chosenColor = 'black';
let rainbowMode = document.querySelector('#rainbow-mode');
let isDrawing = false;

let wrapper = document.querySelector('.color-picker-wrapper');

colorPick.addEventListener('input', (e) => {
    chosenColor = colorPick.value;
    wrapper.style.backgroundColor = colorPick.value;
})
for(let i = 0; i < 16; i++){
    row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for(let j = 0; j < 16; j++){
        let square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
        square.addEventListener('mouseover', (e) => {
            square.style.backgroundColor = chosenColor;
        });
    }
}

gridBtn.addEventListener('click', (e) => {
    let newGridSize = prompt("Enter Grid Dimension: ");
    if(newGridSize != null){
        newGridSize = Number(newGridSize);
        if(newGridSize > 100){
            newGridSize = prompt('Grid Dimension too high to be rendered; Enter lower Grid Dimension: ');
            newGridSize = Number(newGridSize);
        }while(Number.isNaN(newGridSize)){
            newGridSize = prompt('Invalid input. Enter valid Grid Dimension: ');
            if(newGridSize == null){
                return alert('You cancelled.')
            }else{
                newGridSize = Nubmer(newGridSize)
            }
        }
    }else if(newGridSize == null){
        return alert('You cancelled.')
    }

    container.innerHTML = '';
    for(let i = 0; i < newGridSize; i++){
        row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j = 0; j < newGridSize; j++){
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
            square.addEventListener('mouseover', (e) => {
                square.style.backgroundColor = chosenColor;
            });
        }
    }
});

