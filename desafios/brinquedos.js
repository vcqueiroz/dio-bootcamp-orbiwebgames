//TODO: Complete os espaços em branco com uma possível solução para o problema.
var participantes = gets();
var garotos = 0;
var garotas = 0;

for(let i = 0; i < participantes; i++){
  criancas = gets().split(' ');
  var nome = criancas[0];
  var genero = criancas[1];
  if (genero === 'M'){
    garotos++;
  }else {
    garotas++;
    }
}

console.log(garotos + " carrinhos");
console.log(garotas + " bonecas");
//meninos = array.filter('criancas','M').length;
//meninas = array.filter('criancas','F').length;
//print(`${meninos} carrinhos\n${meninas} bonecas`);