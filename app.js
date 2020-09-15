let allPlayers =[];


function AddAllPlayersType(allPlayersType){
    allPlayersType.forEach(element => {
        AddPlayer(element.playerType);
    });
}

function AddAllWeapon(){
    document.getElementById('weapon').innerHTML = "";
    let playrtType = document.getElementById("playerType").value;
    let player =allPlayersType.filter(p=>p.playerType == playrtType)[0];
    player.weapons.forEach(element => {
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
    let damage = document.getElementById("damage").value;
    let gender = document.getElementById("gender").value;
    let weapon = document.getElementById("weapon").value;

    let player =CreateplayerByType(playerType,weapon,damage, gender,name);
    allPlayers.push(player);
}