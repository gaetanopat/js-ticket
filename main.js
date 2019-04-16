document.getElementById('welcome').innerHTML='Calcolo prezzo del biglietto del treno <br><br>';
var km, eta, prezzo, calcolo_percentuale, prezzo_totale;

//chiedo in input i km e l'età
km = prompt('Inserisci numero di kilometri da effettuare');
eta = prompt('Inserisci la tua età');

//prezzo generale
prezzo=km*0.21;

document.writeln('Riepilogo info: <br>');
document.writeln('Km da percorrere: ' + km + ' km <br>');
document.writeln('Hai: ' + eta + ' anni <br>');
document.writeln('Il prezzo del biglietto è definito in base ai km (0.21 €cent al km) <br><br>');

if(eta<18){
  //per i minorenni
  document.writeln('Essendo minorenne hai uno sconto del 20% <br>')
  calcolo_percentuale=(prezzo*20)/100;
  prezzo_totale=prezzo-calcolo_percentuale;
  prezzo_totale=prezzo_totale.toFixed(2);
  document.writeln('Il prezzo iniziale è di: ' + prezzo + ' euro <br>');
  document.writeln('Il prezzo totale è di: ' + prezzo_totale + ' euro');
}else if(eta>65){
  //per gli over 65
  document.writeln('Essendo over 65 hai uno sconto del 40% <br>')
  calcolo_percentuale=(prezzo*40)/100;
  prezzo_totale=prezzo-calcolo_percentuale;
  prezzo_totale=prezzo_totale.toFixed(2);
  document.writeln('Il prezzo iniziale è di: ' + prezzo + ' euro <br>');
  document.writeln('Il prezzo totale è di: ' + prezzo_totale + ' euro');
}else{
  //per tutti gli altri
  prezzo_totale=prezzo;
  prezzo_totale=prezzo_totale.toFixed(2);
  document.writeln('Il prezzo totale è di: ' + prezzo_totale + ' euro');
}
