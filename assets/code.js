var interface = new Interface();
var pokedex = [
  //new Pokemon(name,number,type,hp,level,attack,defense,speed,special,description)
  new Pokemon('Pikachu',10,'eléctrico',80,15,50,40,90,100,'Pikacho el pokemon eléctrico disfruta de la aventura y las largas caminatas por la playa.'),
  new Pokemon('Diglet',22,'tierra',150,22,150,90,30,130,'Diglet es de naturaleza amigable y siempre se le ve rodeado de su manada. Tiene un periodo de hibernación de 3 meses en invierno.'),
  new Pokemon('Gengar',150,'legendario',190,69,980,550,800,700,'No tenemos información de este Pokemon'),
  new Pokemon('Weedle',6,'bicho',50,10,20,10,5,20,'Weedle es un Pokemon difícil de atrapar debido a que vive bajo tierra. Su cuerno tiene un veneno mortal.'),
  new Pokemon('Pidgey',9,'volador',80,12,60,80,55,80,'Pidgey es muy territorial, especialmente cuando ingresa en temporada de encubación. Morirá luchando antes de abandonar sus huevos.'),
  new Pokemon('Odish',31,'planta',90,16,50,40,40,70,'Odish tiene hojas que expelen un aroma lacrimógeno. Debe de tratárselo con cautela.'),
  new Pokemon('Butterfree',42,'veneno',120,22,80,60,60,90,'Butterfree bate sus alas para polinizar las plantas. Se le puede encontrar en jardines y macetas.'),
];

for(var pokemon of pokedex)
{
  interface.addPokemonToTheList(pokemon);
}