let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log("Utilizando for normalmente: ")
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log('Agora, com o for in:')
for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let posi = num.indexOf(8)
console.log(`O valor 8 está na posição ${posi}`)