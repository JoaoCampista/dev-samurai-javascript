var filmes = [
    {titulo: 'Titanic', duracao: 190, nota: 7.5},
    {titulo: 'The Avengers', duracao: 203, nota: 9.5},
    {titulo: 'Bean', duracao: 90, nota: 6.5},
    {titulo: 'Hunter Game', duracao: 78, nota: 5.5},
    {titulo: 'SAW', duracao: 80, nota: 3.5},
    {titulo: 'Planet Monkey', duracao: 76, nota: 1.5},
    {titulo: 'Pokemon', duracao: 199, nota: 8.5},
    {titulo: 'Joker', duracao: 130, nota: 10.0}]

var filterKey = function(item) {
    return item.titulo[0] == "T";   
};

var filterNota = function(item) {
    return item.nota >= 6.5;
};

var filterPares = function(item) {
    return !(item.duracao % 2);
};

var filtroLetra = filmes.filter(filterKey);
var filtroNota = filmes.filter(filterNota);
var filtroPares = filmes.filter(filterPares);

var filtroTotal = filtroPares.filter(filterNota).filter(filterKey)

var filtroTotalCompleto = filmes.filter(function(item){
    if( !(item.duracao % 2) == true && item.nota >= 6.5 && item.titulo[0] == "T") {
        return true
    } else {
        return false
    }
});


console.log(filtroLetra);
console.log(filtroNota);
console.log(filtroPares);


console.log(filtroTotal);

console.log(filtroTotalCompleto);


