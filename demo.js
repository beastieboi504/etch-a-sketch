
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