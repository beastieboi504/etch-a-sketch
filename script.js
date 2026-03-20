let container = document.querySelector('.container');
let gridBtn = document.querySelector('#grid-btn');
let colorPick = document.querySelector('#color-picker');
let chosenColor = 'black';
let rainbowMode = document.querySelector('#rainbow-mode');
let isDrawing = false;
let colorMode = document.querySelector('#color-mode');
let eraser = document.querySelector('#eraser')
let wrapper = document.querySelector('.color-picker-wrapper');
let rainbowModeClicked = false;
let colorModeClicked = false;
let clear = document.querySelector('.clear');
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
        square.addEventListener('mousedown', (e) => {
            e.preventDefault()
            square.style.backgroundColor = chosenColor;
            isDrawing = true;
        })
        document.addEventListener('mouseup', () => isDrawing = false);
        
        square.addEventListener('mouseover', (e) => {
            if(isDrawing == true){
                e.preventDefault();
                square.style.backgroundColor = chosenColor;
            }
        });
        colorMode.addEventListener(('click'), () => {
            colorModeClicked = true;
        })
        rainbowMode.addEventListener(('click'), () => {
            eraser.style.backgroundColor = '#202020';
            eraser.style.color = 'rgb(62, 166, 255)';
            rainbowMode.style.backgroundColor = 'rgb(62, 166, 255)';
            rainbowMode.style.color = '#202020';

            square.addEventListener('mousedown', (e) => {
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                chosenColor = `rgb(${r}, ${g}, ${b})`;
                e.preventDefault()
                square.style.backgroundColor = chosenColor;
                isDrawing = true;
            });
            document.addEventListener('mouseup', () => isDrawing = false);
            square.addEventListener('mouseover', (e) => {
            if(isDrawing == true){
                e.preventDefault();
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                chosenColor = `rgb(${r}, ${g}, ${b})`;
                square.style.backgroundColor = chosenColor;
                }

            });
            
        })

        eraser.addEventListener('click', () =>{
            rainbowModeClicked = false;
            rainbowMode.style.backgroundColor = '#202020';
            rainbowMode.style.color = 'rgb(62, 166, 255)';
            eraser.style.backgroundColor = 'rgb(62, 166, 255)';
            eraser.style.color = '#202020';
            square.addEventListener('mousedown', (e) => {
                e.preventDefault()
                square.style.backgroundColor = 'white';
                isDrawing = true;
            });
            document.addEventListener('mouseup', () => isDrawing = false);
            square.addEventListener('mouseover', (e) => {
            if(isDrawing == true){
                e.preventDefault();
                square.style.backgroundColor = 'white';
                }

            });
        })
    }
}

gridBtn.addEventListener('click', (e) => {
    let newGridSize = prompt("Enter Grid Dimension: ");
    if(newGridSize != null){
        newGridSize = Number(newGridSize);
        while(newGridSize > 100){
            newGridSize = prompt('Grid Dimension too high to be rendered; Enter lower Grid Dimension: ');
            newGridSize = Number(newGridSize);
            if(newGridSize == null){
                return;
            }
        }if(Number.isNaN(newGridSize)){
            while(Number.isNaN(newGridSize)){
                newGridSize = prompt('Invalid input. Enter valid Grid Dimension: ');
                if(newGridSize == null){
                    return;
                }else{
                    newGridSize = Number(newGridSize);
                }
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
            square.addEventListener('mousedown', (e) => {
                e.preventDefault()
                square.style.backgroundColor = chosenColor;
                isDrawing = true;
            })
            rainbowMode.addEventListener(('click'), () => {
                eraser.style.backgroundColor = '#202020';
                eraser.style.color = 'rgb(62, 166, 255)';
                rainbowMode.style.backgroundColor = 'rgb(62, 166, 255)';
                rainbowMode.style.color = '#202020';
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                
            });
            eraser.addEventListener('click', () =>{
                rainbowMode.style.backgroundColor = '#202020';
                rainbowMode.style.color = 'rgb(62, 166, 255)';
                eraser.style.backgroundColor = 'rgb(62, 166, 255)';
                eraser.style.color = '#202020';
                square.addEventListener('mousedown', (e) => {
                    e.preventDefault()
                    square.style.backgroundColor = 'white';
                    isDrawing = true;
                });
                document.addEventListener('mouseup', () => isDrawing = false);
                square.addEventListener('mouseover', (e) => {
                if(isDrawing == true){
                    e.preventDefault();
                    square.style.backgroundColor = 'white';
                    }

                });
            })
        document.addEventListener('mouseup', () => isDrawing = false)
        square.addEventListener('mouseover', (e) => {
            if(isDrawing == true){
                e.preventDefault()
                square.style.backgroundColor = chosenColor;
            }
        });
        }
    }
});
