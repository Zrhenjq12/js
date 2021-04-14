let radio = 500
console.log(radio.value);
let color = ['#7fffd4', '#0000ff', '#7fff00', '#9932cc']
let counter = 0
let countItem = document.querySelector('#counter')
let lvl = 2;
countItem.textContent = counter
let items = document.querySelectorAll('.flex-element')
let games = document.querySelector('.game-class')
let arr2 = []
let il = 0;
radioFunc()

function radioFunc() {
    document.body.addEventListener('click', (event) => {
        if (event.target.tagName == 'INPUT') {
            radio = event.target.value
        }
    })
}

async function game(target, id) {
    if (typeof(id) == 'number') {
        arr.push(id)
    }
    soundClick()
    target.style.backgroundColor = '#FF0000';
    await setTimeout(() => {
        target.style.backgroundColor = color[Math.floor(Math.random() * (4 - 0) + 0)]
    }, radio / 2)
}


document.body.addEventListener('click', (event) => {
    let flag = true;
    event.stopPropagation()
    if (event.target.classList[0] == 'flex-element') {
        if (arr[il] != event.target.dataset.coun) {
            alert('Попробуй ещё раз')
            lvl = 2
            counter = 0
            countItem.textContent = counter
            flag = false
            startGame(-1)
        } else if (il == arr.length - 1) {
            counter += 1
            countItem.textContent = counter
            lvl += 1
            startGame(-1)
            games.textContent = 'Вы успешно прошли уровень'
            setTimeout(() => {
                games.textContent = ''
            }, 1000);
        }
        if (flag) {
            game(event.target)
        }
        il = il + 1
    }
})


function soundClick() {
    let audio = new Audio();
    audio.src = "./01.mp3";
    audio.autoplay = true;
}

async function startGame(value = undefined) {
    arr = []
    il = value || 0
    for (let i = 0; i < lvl; i++) {
        await new Promise(resolve => {
            setTimeout(() => {
                let m = Math.floor(Math.random() * (4 - 0) + 0)
                game(items[m], m)
                resolve()
            }, radio)
        });
    }
}