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
    checkform();
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

    AddAllPlayers();
}

function AddAllPlayers(){
        if(allPlayers.length>0)
        {
            document.getElementById('allPlayers').innerHTML = "";
            allPlayers.forEach(element => {
                AddPlayerToList(element.constructor.name,element.name,element.baseWeapon.damage,element.gender, element.baseWeapon.constructor.name,element);
            });
        }
}
    
function AddPlayerToList(playerType, name,damage,gender,weapon, player) {
        var html = `<div class="col-sm-3 border d-flex justify-content-center text-center player">
        <div class="players">
        <p class="playerType">${playerType}</p>
        <p>${name}</p>
        <p >${damage}</p>
        <p >${gender}</p>
        <p >${weapon}</p>
        <button onclick="Attack('${player.Attack()}')" class="attack button">Attack</button>
        </div>
        </div>`
        document.getElementById("allPlayers").innerHTML += html;
}

function Attack(player)
{
    alert(player);
}


function checkform()
{
    var f = document.forms["theform"].elements;
    var cansubmit = true;

    for (var i = 0; i < f.length; i++) {
        if (f[i].value.length == 0) cansubmit = false;
    }

    if (cansubmit) {
        document.getElementById('submitbutton').disabled = false;
    }
    else {
        document.getElementById('submitbutton').disabled = 'disabled';
    }
}
    

