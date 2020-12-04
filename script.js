

let area = document.getElementById('area');
let cell = document.getElementsByClassName('cell');
let player = 'x';
let winIndex = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 6],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

for (let i = 1; i <= 9; i++){
    area.innerHTML += '<div class="cell" pos="' + i + '"></div>';
}

for (let i = 0; i < cell.length; i++){
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick(){

    var data = [];

    if (!this.innerHTML){
        this.innerHTML = player;
    } else {
        alert('Клетка занята')
        return;
    }

    for (var i in cell){
        if (cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));  // ПИЗДЕЦ ВАЖНО ПОНЯТЬ
        }
    }

    console.log(data);
    if (checkWin(data)){
        alert('Выиграл: ' + player);
    } else {
        var draw =  true;
        for (var i in cell){
            if (cell[i].innerHTML == '') draw = false;
        }
        if (draw){
            alert('Ничья');
            location.reload();
        }
    }

    player = player == 'x' ? 'o' : 'x';
}

function checkWin(data){
    for (var i in winIndex){
        var win = true;
        for (var j in winIndex[i]){
            var id = winIndex[i][j];         // ПИЗДЕЦ ВАЖНО ПОНЯТЬ
            var ind = data.indexOf(id);

            if (ind == -1){
                win = false;
            }
        }

        if (win){
            return true;
        }
    }
    return false;
}