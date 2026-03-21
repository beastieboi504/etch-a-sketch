let container = document.querySelector('.container');
let gridBtn = document.querySelector('#grid-btn');
let colorPick = document.querySelector('#color-picker');
let chosenColor = 'black';
let rainbowMode = document.querySelector('#rainbow-mode');
let isDrawing = false;
let colorMode = document.querySelector('#color-mode');
let eraser = document.querySelector('#eraser')
let wrapper = document.querySelector('.color-picker-wrapper');
let currentmode = '';
let control = document.querySelectorAll('.control');
let clear = document.querySelector('#clear');
let colorModeOut = true;
let eraserModeOut = true;
let rainbowModeOut = true;
colorPick.addEventListener('input', (e) =>{
    wrapper.style.backgroundColor = colorPick.value;
})
for(let i = 0; i < 16; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for(let j = 0; j < 16; j++){
        let square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
        clear.addEventListener('mouseover', () => {
            clear.style.backgroundColor = 'rgb(62, 166, 255)';
            clear.style.color = '#202020';
        })
        clear.addEventListener('mouseout', (e) => {
            clear.style.backgroundColor = '#202020';
            clear.style.color = 'rgb(62, 166, 255)';
        })
        clear.addEventListener('click', () => {
            square.style.backgroundColor = 'white';
        })
        square.addEventListener('mousedown', (e) => {
            e.preventDefault()
            
            isDrawing = true;
            if(currentmode == 'colorMode'){
                console.log('mousedown color');
                chosenColor = colorPick.value;
                square.style.backgroundColor = chosenColor;
            }else if(currentmode == 'rainbowMode'){
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                chosenColor = `rgb(${r}, ${g}, ${b})`;
                square.style.backgroundColor = chosenColor;
            }else if(currentmode == 'eraserMode'){
                square.style.backgroundColor = 'white';
            }else{
                return;
            }
            
        })
        document.addEventListener('mouseup', (e) => isDrawing = false)
        square.addEventListener('mouseover', (e) => {
            e.preventDefault()
            if(isDrawing == true){
                if(currentmode == 'colorMode'){
                    chosenColor = colorPick.value;
                    square.style.backgroundColor = chosenColor;
                }else if(currentmode == 'rainbowMode'){
                    let r = Math.floor(Math.random() * 255);
                    let g = Math.floor(Math.random() * 255);
                    let b = Math.floor(Math.random() * 255);
                    chosenColor = `rgb(${r}, ${g}, ${b})`;
                    square.style.backgroundColor = chosenColor;
                }else if(currentmode == 'eraserMode'){
                    square.style.backgroundColor = 'white';
                }
            }
        })
    }
}
        
colorMode.addEventListener('mouseover', (e) => {
    colorMode.style.backgroundColor = 'rgb(62, 166, 255)';
    colorMode.style.color = '#202020';
})

rainbowMode.addEventListener('mouseover', (e) => {
    rainbowMode.style.backgroundColor = 'rgb(62, 166, 255)';
    rainbowMode.style.color = '#202020';
})

eraser.addEventListener('mouseover', (e) => {
    eraser.style.backgroundColor = 'rgb(62, 166, 255)';
    eraser.style.color = '#202020';
})




colorMode.addEventListener('click', () => {
    eraserModeOut = true;
    rainbowModeOut = true;
    control.forEach(btn => {
        btn.style.backgroundColor = '#202020';
        btn.style.color = 'rgb(62, 166, 255)';
    });    

    colorMode.style.backgroundColor = 'rgb(62, 166, 255)';
    colorMode.style.color = '#202020';
    currentmode = 'colorMode';
    colorModeOut = false;

})
rainbowMode.addEventListener('click', () => {
    eraserModeOut = true;
    colorModeOut = true;
    currentmode = 'rainbowMode';
    control.forEach(btn => {
        btn.style.backgroundColor = '#202020';
        btn.style.color = 'rgb(62, 166, 255)';
    });

    rainbowMode.style.backgroundColor = 'rgb(62, 166, 255)';
    rainbowMode.style.color = '#202020';
    rainbowModeOut = false;
})
eraser.addEventListener('click', () => {
    colorModeOut = true;
    rainbowModeOut = true;  
    currentmode = 'eraserMode';
    control.forEach(btn => {
        btn.style.backgroundColor = '#202020';
        btn.style.color = 'rgb(62, 166, 255)';
    });

    eraser.style.backgroundColor = 'rgb(62, 166, 255)';
    eraser.style.color = '#202020';
    eraserModeOut = false;
})
colorMode.addEventListener('mouseout', (e) => {
     if(colorModeOut){
        colorMode.style.backgroundColor = '#202020';
        colorMode.style.color = 'rgb(62, 166, 255)';
     }   
})
rainbowMode.addEventListener('mouseout', (e) => {
    if(rainbowModeOut){
        rainbowMode.style.backgroundColor = '#202020';
        rainbowMode.style.color = 'rgb(62, 166, 255)';
    }
})
eraser.addEventListener('mouseout', (e) => {
    if(eraserModeOut){
        eraser.style.backgroundColor = '#202020';
        eraser.style.color = 'rgb(62, 166, 255)';
    }
})



gridBtn.addEventListener('click', (e) => {
    eraser.style.backgroundColor = '#202020';
    eraser.style.color = 'rgb(62, 166, 255)';   
    rainbowMode.style.backgroundColor = '#202020';
    rainbowMode.style.color = 'rgb(62, 166, 255)'; 
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
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j = 0; j < newGridSize; j++){
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
            clear.addEventListener('mouseover', () => {
                clear.style.backgroundColor = 'rgb(62, 166, 255)';
                clear.style.color = '#202020';
            })
            clear.addEventListener('mouseout', (e) => {
                clear.style.backgroundColor = '#202020';
                clear.style.color = 'rgb(62, 166, 255)';
            })
            clear.addEventListener('click', () => {
                square.style.backgroundColor = 'white';
            })
            square.addEventListener('mousedown', (e) => {
                e.preventDefault()
                
                isDrawing = true;
                if(currentmode == 'colorMode'){
                    console.log('mousedown color');
                    chosenColor = colorPick.value;
                    square.style.backgroundColor = chosenColor;
                }else if(currentmode == 'rainbowMode'){
                    let r = Math.floor(Math.random() * 255);
                    let g = Math.floor(Math.random() * 255);
                    let b = Math.floor(Math.random() * 255);
                    chosenColor = `rgb(${r}, ${g}, ${b})`;
                    square.style.backgroundColor = chosenColor;
                }else if(currentmode == 'eraserMode'){
                    square.style.backgroundColor = 'white';
                }
                
            })
            document.addEventListener('mouseup', (e) => isDrawing = false)
            square.addEventListener('mouseover', (e) => {
                e.preventDefault()
                if(isDrawing == true){
                    if(currentmode == 'colorMode'){
                        chosenColor = colorPick.value;
                        square.style.backgroundColor = chosenColor;
                    }else if(currentmode == 'rainbowMode'){
                        let r = Math.floor(Math.random() * 255);
                        let g = Math.floor(Math.random() * 255);
                        let b = Math.floor(Math.random() * 255);
                        chosenColor = `rgb(${r}, ${g}, ${b})`;
                        square.style.backgroundColor = chosenColor;
                    }else if(currentmode == 'eraserMode'){
                        square.style.backgroundColor = 'white';
                    }
                }
            })
        }
    }
    colorMode.addEventListener('click', () => {
        eraserModeOut = true;
        rainbowModeOut = true;
        control.forEach(btn => {
            btn.style.backgroundColor = '#202020';
            btn.style.color = 'rgb(62, 166, 255)';
        });    

        colorMode.style.backgroundColor = 'rgb(62, 166, 255)';
        colorMode.style.color = '#202020';
        currentmode = 'colorMode';
        colorModeOut = false;

    })
    rainbowMode.addEventListener('click', () => {
        eraserModeOut = true;
        colorModeOut = true;
        currentmode = 'rainbowMode';
        control.forEach(btn => {
            btn.style.backgroundColor = '#202020';
            btn.style.color = 'rgb(62, 166, 255)';
        });

        rainbowMode.style.backgroundColor = 'rgb(62, 166, 255)';
        rainbowMode.style.color = '#202020';
        rainbowModeOut = false;
    })
    eraser.addEventListener('click', () => {
        colorModeOut = true;
        rainbowModeOut = true;  
        currentmode = 'eraserMode';
        control.forEach(btn => {
            btn.style.backgroundColor = '#202020';
            btn.style.color = 'rgb(62, 166, 255)';
        });

        eraser.style.backgroundColor = 'rgb(62, 166, 255)';
        eraser.style.color = '#202020';
        eraserModeOut = false;
    })
    colorMode.addEventListener('mouseout', (e) => {
        if(colorModeOut){
            colorMode.style.backgroundColor = '#202020';
            colorMode.style.color = 'rgb(62, 166, 255)';
        }   
    })
    rainbowMode.addEventListener('mouseout', (e) => {
        if(rainbowModeOut){
            rainbowMode.style.backgroundColor = '#202020';
            rainbowMode.style.color = 'rgb(62, 166, 255)';
        }
    })
    eraser.addEventListener('mouseout', (e) => {
        if(eraserModeOut){
            eraser.style.backgroundColor = '#202020';
            eraser.style.color = 'rgb(62, 166, 255)';
        }
    })
});
