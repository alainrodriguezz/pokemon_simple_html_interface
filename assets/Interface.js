class Interface
{
  constructor()
  {
    this.screens = {
      list        : 'screen_list',
      description : 'screen_description'
    };

    this.sounds = {
      enter       : new Audio('assets/sound_enter.wav'),
    }
    
    this.pokemons       = [];
    this.currentScreen  = '';
    this.currentPokemon = 0;

    this.setupListeners();
    this.goToScreen(this.screens.list);
  }

  setupListeners()
  {
    window.addEventListener('keydown', e => this.onKeyDown(e));
  }

  onKeyDown(e)
  {
    var key = e.key;

    if(this.currentScreen == this.screens.list)
    {
      if(key == 'ArrowUp')    this.moveArrowInList(-1);
      if(key == 'ArrowDown')  this.moveArrowInList(1);
      if(key == 'Enter')      this.goToScreen(this.screens.description);
    }

    if(this.currentScreen == this.screens.description)
    {
      if(key == 'Escape')
      {
        this.sounds.enter.play();
        this.goToScreen(this.screens.list)
      } 
    }
  }

  goToScreen(screenName)
  {
    this.currentScreen = screenName;

    this.hideAllScreens();
    if(this.currentScreen == this.screens.description) this.fillPokemonDescription();
    document.getElementById(screenName).classList.remove('hide');
  }

  hideAllScreens()
  {
    for(var i in this.screens)
    {
      var screenName = this.screens[i];
      document.getElementById(screenName).classList.add('hide');
    }
  }

  moveArrowInList(direction)
  {
    this.currentPokemon += direction;
    this.currentPokemon = Math.max(0,Math.min(this.currentPokemon,this.pokemons.length-1));

    var arrows = document.getElementsByClassName('img_arrow');
    for(var arrow of arrows)
    {
      arrow.classList.add('hide');
    }

    var id        = this.currentPokemon;
    var currArrow = document.getElementById('arrow'+id);
    currArrow.classList.remove('hide');
  }

  fillPokemonDescription()
  {
    var id      = this.currentPokemon;
    var pokemon = this.pokemons[id];

    pokemon.roar();

    document.getElementById('desc_img').setAttribute('src',pokemon.img_url);
    document.getElementById('desc_name').innerHTML        = pokemon.name;
    document.getElementById('desc_name').innerHTML        = pokemon.name;
    document.getElementById('desc_level').innerHTML       = pokemon.level;
    document.getElementById('desc_hp1').innerHTML         = pokemon.hp;
    document.getElementById('desc_hp2').innerHTML         = pokemon.hp;
    document.getElementById('desc_number').innerHTML      = pokemon.number;
    document.getElementById('desc_type').innerHTML        = pokemon.type;
    document.getElementById('desc_attack').innerHTML      = pokemon.attack;
    document.getElementById('desc_defense').innerHTML     = pokemon.defense;
    document.getElementById('desc_speed').innerHTML       = pokemon.speed;
    document.getElementById('desc_special').innerHTML     = pokemon.special;
    document.getElementById('desc_description').innerHTML = pokemon.description;
  }

  addPokemonToTheList(pokemon)
  {
    var id    = this.pokemons.length;
    var child = '\
    <table id="poke'+id+'" align="center">\
          <tr>\
            <td class="arrow_container" width="35" align="right">\
              <img src="assets/poke_asset_arrow.gif" id="arrow'+id+'" class="img_arrow margin_right" width="17">\
            </td>\
            <td width="80">\
              <img src="'+pokemon.img_url+'" width="60">\
            </td>\
            <td width="240">\
              <h3 class="no_margin no_padding uppercase">'+pokemon.name+'</h3>\
              <span class="text_small text_bold">HP:</span><img src="assets/poke_asset_lifebar.gif" alt="">\
            </td>\
            <td class="text_bold" width="120">\
              L:'+pokemon.level+' <br>\
              '+pokemon.hp+'/'+pokemon.hp+'\
            </td>\
          </tr>\
        </table>\
    ';

    document.getElementById('pokemon_list_container').innerHTML += child;
    this.pokemons.push(pokemon);
    this.moveArrowInList(-1);
  }
}