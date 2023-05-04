const nomes = [
  {
    name: 'Aury'
  },
  {
    name: 'Fin'
  },
  {
    name: 'Leleo'
  },
  {
    name: 'Retake'
  },
  {
    name: 'NoHaTz'
  },
]

function sorteio() {
  const sorteio = Math.round((Math.random() * (nomes.length - 1)))
  document.getElementById("resultado").innerHTML = nomes[sorteio].name;
}
