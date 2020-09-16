class BasePlayer{
    constructor(baseWeapon, gender, name) {
        this.baseWeapon = baseWeapon;
        this.gender = gender;
        this.name = name;
      }

      Attack() 
      {
          return `${this.name} Attacked with ${this.baseWeapon.damage} Damage! ${this.baseWeapon.Attack()}`;
      }
}

class Warrior extends BasePlayer
{
    constructor(baseWeapon, gender, name) {
        if(baseWeapon instanceof Sword ||baseWeapon instanceof  Axe ||baseWeapon instanceof  Blunt){ 
            super(baseWeapon, gender,name); 
        }else {
          throw new Error("warrior can only have weapon of types: Sword, Axe and Blunt");
        }
    }
      Attack() 
      {
        let superAttack =super.Attack(); 
          return `The Warrior ${superAttack}`;
      }
}


class Wizard extends BasePlayer
{
    constructor(baseWeapon, gender, name) {
        if(baseWeapon instanceof Wand){ 
            super(baseWeapon, gender,name); 
        }
    }
      Attack() 
      {
        let superAttack =super.Attack(); 
        return `The Warrior ${superAttack}`;
      }
}

class Bower extends BasePlayer
{
    constructor(baseWeapon, gender, name) {
        if(baseWeapon instanceof Bow ||baseWeapon instanceof Sword){ 
            super(baseWeapon, gender,name); 
        }
    }
      Attack() 
      {
        let superAttack =super.Attack(); 
        return `The Warrior ${superAttack}`;
      }
}

// let allPlayersType =[
//  "Warrior",
//   "Wizard",
//   "Bower"
// ];


let  allPlayersType=[
  {"playerType":"Warrior","weapons":["Sword","Axe","Blunt" ]},
  {"playerType":"Wizard","weapons":["Wand"]},
  {"playerType":"Bower","weapons":["Bow","Sword" ]}
 ];

function CreateplayerByType(playerType, baseWeapon, damage, gender, name)
{
  switch(playerType)
  {
      case "Warrior" :
        return new  Warrior(CreateWeaponByName(baseWeapon, damage), gender, name);
        break;
      case "Wizard" :
        console.log(CreateWeaponByName(baseWeapon, damage));
        return new  Wizard(CreateWeaponByName(baseWeapon, damage), gender, name);
        break;
      case "Bower" :
        return new  Bower(CreateWeaponByName(baseWeapon, damage), gender, name);
        break;
  }
}


