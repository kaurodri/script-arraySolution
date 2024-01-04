function arraySolution(entrada, nova, sinal, separar) {
    //Variáveis
    let txtNovo = nova;
    let txtAntigo = entrada;
    //Offlines
    const players = [];
    const users = [];

    function verificarSeparar(s) {
        const tem = (s === null) ? txtAntigo : txtAntigo.split(s);
        const tera = (s === null) ? txtNovo : txtNovo.split(s);
        return { tem, tera };
    }
    const { tem, tera } = verificarSeparar(separar);

    for (let i = 0; i < tem.length; i++) {
        try {
            const nickTem = tem[i].split(sinal)[0];
            const horarioTem = tem[i].split(sinal)[1];
            players.push([nickTem, horarioTem]);
            users.push(nickTem);
        } catch (erro) {
            console.log('[Erro] - 1 - For i:', erro.message);
        }
    }

    const reverseTera = tera.slice().reverse();
    for (let i = tera.length - 1; i >= 0; i--) {
        try {
            const nickTera = reverseTera[i].split(sinal)[0];
            const horarioTera = reverseTera[i].split(sinal)[1];
            if (users.includes(nickTera)) {
                const pos = users.indexOf(nickTera);
                users.splice(pos, 1);
            }
            users.unshift(nickTera);
            players.push([nickTera, horarioTera]);
        } catch (erro) {
            console.log('[Erro] - 2 - For i:', erro.message);
        }
    }

    let novo = '';
    for (let i = 0; i < users.length; i++) {
        try {

            if (separar == null) {
                novo += users[i] + sinal + players.find(([nick]) => nick === users[i])[1];
                if (i !== users.length - 1) {
                    novo += "\n";
                }
            } else {
                novo += users[i] + sinal + players.find(([nick]) => nick === users[i])[1];
                if (i !== users.length - 1) {
                    novo += separar;
                }
            }

        } catch (erro) {
            console.log('[Erro] - 3 - For i:', erro.message);
        }
    }
    switch (separar) {
        case null:
            return novo.split("\n");
        default:
            return novo;
    }
    
}
module.exports = arraySolution;