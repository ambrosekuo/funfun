let raccoonArray = [];
let bearArray = [];


function spawnRaccoon() {
    let rac;
    rac = document.createElement('div');
    rac.classList.add('raccoon');
    rac.id = `raccoon${raccoonArray.length}`;
    raccoonArray.push(rac);
    document.getElementById('animalContainer').appendChild(rac);
}

function spawnBear() {
    let bear;
    bear = document.createElement('div');
    bear.classList.add('bear');
    bear.id = `raccoon${bearArray.length}`;
    bearArray.push(bear);
    document.getElementById('animalContainer').appendChild(bear);
}