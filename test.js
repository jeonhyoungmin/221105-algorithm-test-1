const Text = "We will never be able to recognize opportunities if we first don’t recognize all that we have and all that we’ve been given."

const words = Text.split(' ')
console.log(words.length)


// function spacingFuc() {
//   const wordsplus = []
//   const count = 0
//   const wordsNum = 0
//   for(let i = 0 ; i < Text.length ; i ++) {
//     if(Text[i] === '') count ++
//     else {
//       wordsplus[count][wordsNum] = Text[i]
//       wordsNum ++
//     }
//   }
//   return wordsplus
// }
// console.log(spacingFuc())
let count = 1
    for(let i = 0 ; i < Text.length ; i ++) {
      if(Text[i] === ' ') {
        count ++
      }
    }
    console.log(count)