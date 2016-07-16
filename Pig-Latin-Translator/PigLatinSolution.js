console.log('Pig Latin test');

var vowels = ['a','e','i','o','u'];

var toPigLatin = function(str){
  // return string converted to pig latin
  str = str.split(' ');
  console.log(str);
  str.forEach(function(item, i, words){
    var changed = false;
    vowels.forEach(function(letter, j, letters){
      if(item[0] === letter){
        words[i] = item + 'yay';
        changed = true;
      }
    });
    if(changed === false){
      words[i] = item.slice(1) + item[0] + 'ay';
    }
  });
  str = str.join(' ');
  console.log(str);
  return 'str';
}