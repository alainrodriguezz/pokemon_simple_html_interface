class Pokemon
{
  constructor(name,number,type,hp,level,attack,defense,speed,special,description)
  {
    var img_bank = {
      diglet        : 'assets/poke_diglet.gif',
      pikachu       : 'assets/poke_pikachu.gif',
      gengar        : 'assets/poke_gengar.gif',
      weedle        : 'assets/poke_weedle.gif',
      pidgey        : 'assets/poke_pidgey.gif',
      odish         : 'assets/poke_odish.gif',
      butterfree    : 'assets/poke_butterfree.gif',
    }
    var sound_roars = {
      diglet      : new Audio('assets/sound_roar1.wav'),
      pikachu     : new Audio('assets/sound_roar2.wav'),
      gengar      : new Audio('assets/sound_roar3.wav'),
      weedle      : new Audio('assets/sound_roar4.wav'),
      pidgey      : new Audio('assets/sound_roar5.wav'),
      odish       : new Audio('assets/sound_roar6.wav'),
      butterfree  : new Audio('assets/sound_roar7.wav'),
    }

    this.name         = name;
    this.number       = number;
    this.type         = type;
    this.hp           = hp;
    this.level        = level;
    this.attack       = attack;
    this.defense      = defense;
    this.speed        = speed;
    this.special      = special;
    this.description  = description;
    this.img_url      = img_bank[this.name.toLowerCase()];
    this.sound_roar   = sound_roars[this.name.toLowerCase()];
  }

  roar()
  {
    this.sound_roar.play();
  }
}