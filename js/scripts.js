// scripts.js
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUppercase = dinosaur.toUpperCase();

console.log('Tekst do zmiany : ' + text);
console.log('Zmieniłem napis ' + dinosaur + ' i zapisałem go dużymi literami ' + dinosaurUppercase);

var textCharsAfter = text.replace('Velociraptor', dinosaurUppercase);

console.log('Zmieniłem wyraz Velociraptor na ' + dinosaurUppercase);
console.log('Tekst po zmianie : ' + textCharsAfter);
var textCharsAfterLength = text.length / 2;
var partOfText = textCharsAfter.slice(0, textCharsAfterLength);
console.log('Wyświetlam połowę tekstu : ' + partOfText);