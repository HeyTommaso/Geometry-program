const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
readline.question(`Quale è l'area? `, area => {
    readline.question(`Quale è la misura dell'angolo `, angle => {
        var x = area;
        var y = angle;

        let c = x * y;

        let z = c / 360;

        console.log(z)

        readline.close()
    })
})

  