// For Loop 
  let texto = ''
  for(let i = 0; i <= 20; i++){
      texto = texto + i + '<br>'
  }
  document.getElementById('dia').innerHTML = texto;



// For Lopp Array - For in
// roda(percorre) apenas o numero de itens do array

let carros = ['Fusca', 'Chevette', 'Gol', 'Palio', 'Brasilia'];

let html = '<ul>'
for (let i in carros){
  html += "<li>" + carros[i] + "</li>"
}
html += '</ul>'

document.getElementById("demo").innerHTML = html