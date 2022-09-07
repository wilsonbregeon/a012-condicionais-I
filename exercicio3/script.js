let nacionalidade = prompt("Qual a sua nacionalidade?").toLowerCase()

// if(nacionalidade == "brasileira" || nacionalidade == "argentina" || nacionalidade == "uruguaia" || nacionalidade == "chilena" || nacionalidade == "colombiana"){
//     console.log("nacionalidade encontrada")
// }else{
//     console.log("nacionalidade não encontrada")
// }

if(nacionalidade === "brasileira"){
    console.log("nacionalidade brasileira")
}else if(nacionalidade === "argentina"){
    console.log("nacionalidade argentina")
}else if(nacionalidade === "uruguaia"){
    console.log("nacionalidade uruguaia")
}else if(nacionalidade === "chilena"){
    console.log("Nacionalidade chilena")
}else if(nacionalidade === "colombiana"){
    console.log("nacionalidade colombiana")
}else{
    console.log("nacionalidade não encontrada")
}