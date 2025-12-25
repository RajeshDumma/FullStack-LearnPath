 let box = document.getElementById('box');
        box.addEventListener('mouseover', () =>{
            console.log("mouse over to the box");
            box.style.backgroundColor = 'green';
            box.style.borderRadius = '50%';
        })

        box.addEventListener('mouseout' , () => {
            box.style.backgroundColor = 'aqua';
            box.style.borderRadius = '0%';
            
        })