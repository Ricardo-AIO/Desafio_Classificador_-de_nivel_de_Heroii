


// VARIÁVEIS
let heroi = "Zorro"
let quantidadeXP = 1222
let nivelPersonagem = ""


// Nível FERRO
if (quantidadeXP < 1000) {
    nivelPersonagem = "Ferro"
}


// Nível BRONZE
else if ((quantidadeXP > 1000) && (quantidadeXP <= 2000)) {
    nivelPersonagem = "Bronze"
}


// Nível PRATA
else if ((quantidadeXP > 2000) && (quantidadeXP <= 5000)) {
    nivelPersonagem = "Prata"
}


// Nível OURO
else if ((quantidadeXP > 6000) && (quantidadeXP <= 7000)) {
    nivelPersonagem = "Ouro"
}


// Nível PLATINA
else if ((quantidadeXP > 7000) && (quantidadeXP <= 8000)) {
    nivelPersonagem = "Platina"
}


// Nível ASCENDENTE
else if ((quantidadeXP > 8000) && (quantidadeXP <= 9000)) {
    nivelPersonagem = "Ascendente"
}


// Nível IMORTAL
else if ((quantidadeXP > 9000) && (quantidadeXP <= 10000)) {
    nivelPersonagem = "Imortal"
}

// Nível RADIANTE
else {
    nivelPersonagem = "Radiante"
}


console.log("O Herói de nome " + heroi + " está no nível de " + nivelPersonagem)