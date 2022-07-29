let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');
let displayText = document.getElementById('displayText');


startBtn.addEventListener('click', () => {
    setInterval(startBtn, ()=>{
        displayText.innerHTML = Date.now() % 12;
    })
})

