var assert = chai.assert;

describe('Translate to Pig Latin', function(){

  it('Add \'yay\' to words starting with vowels', function(){
    assert.equal(toPigLatin('one'),'oneyay');
  });

  it('Move single consonants to the end of a word and add \'ay\'.', function(){
    assert.equal(toPigLatin('you'),'ouyay');
  });

  it('Move groups of consonants to the end of a word and add \'ay\'.', function(){
    assert.equal(toPigLatin('this is a test'),'isthay isyay ayay esttay');
  });

  it('Should account for punctuation', function(){
    assert.equal(toPigLatin('What?!'),'Atwhay?!');
  });

  it('Should account for capitalization of the first word', function(){
    assert.equal(toPigLatin('This is easy'),'Isthay isyay easyyay');
  });

  it('Should account for capitalization of any words', function(){
    assert.equal(toPigLatin('This isn\'t as Simple'),'Istahy isn\'tyay asyay Implesay');
  });

});