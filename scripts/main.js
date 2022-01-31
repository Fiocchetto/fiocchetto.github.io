var email;
var termineEmail;
var separatore;

function calcolo() {
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  nome = nome.toLowerCase()
  nome = nome.replace(/\s+/g, '');
  cognome = cognome.toLowerCase()
 
  if(separatore === undefined && termineEmail === undefined) {
    email = "Selezionare una scuola"
  }else if(nome !== "" && cognome !== "") {
    email =`Email: ${nome}${separatore}${cognome}${termineEmail}`
  }else {
    email = "Nome o cognome non valido"
  }
  document.getElementById("boh").innerHTML = email
  return;
}

function iisviasilvestri301() {
  termineEmail = "@iisviasilvestri301roma.edu.it"
  separatore = "."
}
function scuolafratellicervi() {
  termineEmail = "@scuolafratellicervi.edu.it"
  separatore = "";
}



/*
let nomeCorretto = false
let cognomeCorretto = false

let nome = window.prompt("Nome: ");
while(nomeCorretto === false){
  if(nome !== "") {
    break
  }else {
    nome = window.prompt("Inserire un nome valido");
  }
}

if(nome !== null) {
  let cognome = window.prompt("Cognome: ")
  while(cognomeCorretto === false){
    if(cognome !== "") {
      break
    }else {
      cognome = window.prompt("Inserire un cognome valido");
    }
  }
}

if(cognome !== null) {
  alert(`Email: ${nome}.${cognome}@iisviasilvestri301roma.edu.it`);
}
*/