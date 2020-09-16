class BaseWeapon{
    constructor(damage , type) {
        this.damage = damage;
        this.type = type;
      }

      Attack() 
      {
          return "Hit";
      }
}

class Wand extends BaseWeapon
{
    constructor(damage , type) {
        super(damage, type); 
      }

      Attack() 
      {
          return "Fshhhh";
      }
}

class Sword extends BaseWeapon
{
    constructor(damage , type) {
        super(damage, type); 
      }

      Attack() 
      {
          return "Swinggg";
      }
}

class Axe extends BaseWeapon
{
    constructor(damage , type) {
        super(damage, type); 
      }

      Attack() 
      {
          return "Achtshhhh";
      }
}

class Blunt extends BaseWeapon
{
    constructor(damage , type) {
        super(damage, type); 
      }

      Attack() 
      {
          return "Boomm";
      }
}

class Bow extends BaseWeapon
{
    constructor(damage , type) {
        super(damage, type); 
      }

      Attack() 
      {
          return "Shboinggg";
      }
}


// let allWeapon =[
//     "Wand",
//      "Sword",
//      "Axe",
//      "Blunt",
//      "Bow"
//    ]
   

 function CreateWeaponByName(weaponName, damage)
{
  switch(weaponName)
  {
      case "Wand" :
        return new Wand(damage);
        break;
      case "Sword" :
        return new  Sword(damage);
        break;
      case "Axe" :
        return new  Axe(damage);
        break;
    case "Blunt" :
        return new  Blunt(damage);
        break;
    case "Bow" :
        return new  Bow(damage);
        break;
  }
}

