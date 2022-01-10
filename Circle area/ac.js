const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Cosa vuoi fare? Digita 1 per calcolare l'area, digita 2 per calcolare il raggio `, scelta => {
      if(scelta == 1) {
        readline.question(`Quale è il raggio? `, radius => {
            var x = Math.pow(radius, 2);
            const y = 3.14;
            
            let z = x * y;

            console.log(z)

            readline.close()
          })

      } else if (scelta == 2) {
        readline.question(`Quale è l'area?`, area => {
            var a = area
            
            var b = a / 3.14

            const c = Math.sqrt(b);

            console.log(c);

            readline.close()
        })
      }
  })

  