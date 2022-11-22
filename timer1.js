let input = process.argv
let timer = (input) => {
  if (!input >= 0){
    return
  }
  if (!input === Number){
    return
  }
  for (let i = 2; i < input.length; i++){
      setTimeout( () => {
        process.stdout.write('\x07');
      }, input[i] * 1000)
  }
}
  
timer(input)




