const alpha = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function rot13(str) {
  // create accumulator
  let acum = '';

  // loop through the string
  for (let i = 0; i < str.length; i++) {
    const chara = str[i];
    const isALetter = alpha.includes(chara);
    // if char is not letter, add to acc
    if (isALetter === false) {
      acum += chara;
    } else {
      // else, rotate + or - 13, add to acc
      const charIndex = alpha.findIndex((c) => c === chara);

      acum += alpha[charIndex + 13] || alpha[charIndex - 13];
    }
  }
  return acum;
}

rot13("SERR PBQR PNZC");