function countVowels(str) {
  const vowels = /[aeiou]/gi;

  const matches = str.match(vowels);

  return matches ? matches.length : 0;
}

const exampleString = "Hello World!";
console.log(countVowels(exampleString));

const exampleString1 = "javascipt";
console.log(countVowels(exampleString1));
