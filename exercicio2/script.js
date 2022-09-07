let idade = Number(prompt("Qual a sua idade?"))
let TerminouEnsinoMedio = prompt("Terminou o ensino médio?").toLowerCase()
let CursandoFaculdade = prompt("Está cursando faculdade?").toLowerCase()

 if(idade >= 18){
     console.log(`${idade} anos: Maior de idade`)
 }else{
 	console.log(`${idade} anos: Menor de idade`)
 }

 if(TerminouEnsinoMedio == "sim"){
     console.log(`${TerminouEnsinoMedio}: Ensino médio completo`)
 }else{
     console.log(`${TerminouEnsinoMedio}: Ensino médio incompleto`)
 }

 if(CursandoFaculdade == "sim"){
     console.log(`${CursandoFaculdade}: Cursando faculdade`)
 }else{
     console.log(`${CursandoFaculdade}: Não está cursando faculdade`)
 }

