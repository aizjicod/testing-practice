const stringLength = (string) => {
  const wordLength = string.length;
    if(wordLength > 1 && wordLength < 10) {
      return wordLength
    }else {
      return 'error'
    }
}

module.exports = stringLength;