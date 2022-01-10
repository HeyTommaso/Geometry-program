const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
readline.question(`Quale è il diametro? `, circum => {
    var x = circum;

    let z = x * 3.14;

    console.log(z)
    
    readline.close()
})

  