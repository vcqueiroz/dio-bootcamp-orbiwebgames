//TODO: Complete os espaços em branco com uma solução possível para o problema.
let n = gets();
let matricula;
let notaMaior = 0;

for (let i = 0; i < n; i++) {
  let line = gets().split(" ");
  let nota = parseFloat(line[1]);
    if (nota > notaMaior) {
      matricula = line[0];
      notaMaior = nota;
    }
}

if (notaMaior >= 8 && notaMaior <= 10) {
  print(matricula);
  } else {
    print("Minimum note not reached");
    }