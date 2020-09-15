function AddAllPlayersType(allPlayersType){
    document.getElementById('playerType').innerHTML = "";
    allPlayersType.forEach(element => {
        AddPlayer(element);
    });
}

function AddAllWeapon(){
    let playrtType = document.getElementById("playerType").value;
    allWeapon.forEach(element => {
        AddWeapon(element);
    });
}

function AddPlayer(playerType) {
    var html = `<option value=${playerType}>${playerType}</option>`

    document.getElementById('playerType').innerHTML += html;
}

AddAllPlayersType(allPlayersType);

function AddWeapon(weapon){
    var html = `<option value=${weapon}>${weapon}</option>`

    document.getElementById('weapon').innerHTML += html;
}

function CreatePlayer()
{
    let playerType = document.getElementById("playerType").value;
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let weapon = document.getElementById("weapon").value;
}