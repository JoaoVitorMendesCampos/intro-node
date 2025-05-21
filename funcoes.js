function f1() {
    console.log("Alert")
}

const f2 = function(){
    console.log('llll')
}

const f3 = () => {
    console.log('Exportação com sucesso')
}

const f4 = () => {
    const ob = {"nome": 'Billy', "idade": '45', "score": '870'}
    const {nome, score} = ob
    console.log(nome)
    console.log(score)
}

//module.exports = f3 
module.exports = {f1, f2, f3, f4}