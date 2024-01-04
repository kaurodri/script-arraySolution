# script-arraySolution
```js
const arraySolution = require('./script.js');

{//Exemplo 1 : com String
    let entrada = "dx4\ncx3\nbx2\nax1";
    let novo = "ex5\nfx6\ngx7";

    console.log(arraySolution(entrada, novo, "x", "\n"))
    //resultado -> gx7\nfx6\nex5\ndx4\ncx3\nbx2\nax1
}

{//Exemplo 2 : com Array
    let entrada = ["dx4","cx3","bx2","ax1"];
    let novo = ["ex5","fx6","gx7"];

    console.log(arraySolution(entrada, novo, "x", null))
    //resultado -> ['gx7', 'fx6', 'ex5', 'dx4', 'cx3', 'bx2', 'ax1']
}
```
