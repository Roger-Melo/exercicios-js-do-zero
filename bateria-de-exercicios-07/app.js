/*
Se o exercício contém dicas nas últimas linhas, leia as 
dicas (após a linha "Dicas:") apenas se precisar. 
*/

/*
01

Descomente o console.log abaixo e veja o resultado no 
console.

Por que será que a função não está substituindo o caractere 
do index 3 da string?

Conserte a função para que ela retorne a mensagem com a 
palavra "certo" ao invés de "serto".

A função deve retornar a string 'Tá certo?'.
*/

const consertaPalavra = str => {
  str[3] = 'c'
  return str
}

// console.log(consertaPalavra('Tá serto?'))

/* 
02

Refatore a função multiplicar, para que ela tenha menos 
linhas mas continue funcionando como já está. 

Use as invocações abaixo da função para testá-la. 
*/

const eUndefined = arg => arg === undefined

const multiplicar = (a, b, c) => {
  if (eUndefined(a) || eUndefined(b) || eUndefined(c)) {
    return 'Insira todos os argumentos!'
  }

  return a * b * c
}

multiplicar()
multiplicar(1)
multiplicar(1, 2)
multiplicar(1, 2, 3)

/*
03

Refatore a expressão da const temNenhumArg. 

É possível fazer com que essa expressão fique um pouquinho 
menor e não use o operador &&. 

Após refatorar, descomente os console.log abaixo da função 
para testá-la. A invocação somar() precisa continuar 
retornando false. 

Dica:

Você pode usar outra forma de verificar se todos os 
argumentos são undefined.
*/

const somar = (arg1, arg2, arg3) => {
  const temSoArg1 = !eUndefined(arg1) && eUndefined(arg2) && eUndefined(arg3)
  const temSoArg1E2 = !eUndefined(arg1) && !eUndefined(arg2) && eUndefined(arg3)
  const temTodosArgs = !eUndefined(arg1) && !eUndefined(arg2) && !eUndefined(arg3)
  const temNenhumArg = eUndefined(arg1) && eUndefined(arg2) && eUndefined(arg3)

  if (temSoArg1) {
    return arg1
  }
  
  if (temSoArg1E2) {
    return arg1 + arg2
  }
  
  if (temTodosArgs) {
    return arg1 + arg3
  }
  
  if (temNenhumArg) {
    return false
  }

  return null
}

// console.log('somar(1):', somar(1))
// console.log('somar(1, 2):', somar(1, 2))
// console.log('somar(1, 2, 3):', somar(1, 2, 3))
// console.log('somar():', somar())
// console.log('somar(undefined, 1, 2):', somar(undefined, 1, 2))

/*
04

A função abaixo está funcionando como o esperado. Isto é, 
ela retorna o dobro dos números que recebe. 

Refatore-a de forma que ela tenha menos código mas sua 
funcionalidade permaneça a mesma. 

Dica:

Você pode substituir o for loop. 
*/

const dobrar = numeros => {
  const numerosDobrados = []

  for (let i = 0; i < numeros.length; i++) {
    numerosDobrados.push(numeros[i] * 2)
  }

  return numerosDobrados
}

dobrar([1, 2, 3])

/* 
05

Descubra o que a função saoMesmaVersao está fazendo. 

Após descobrir, refatore a função de forma que ela tenha 
menos código, mas sua funcionalidade permaneça a mesma. 

Observe que há duas invocações de saoMesmaVersao abaixo da 
declaração dela. Após a refatoração, a primeira invocação 
deve continuar retornando false e a segunda invocação deve 
continuar retornando true.
*/

const versaoOficial = 7

const saoMesmaVersao = obj => {
  let mesmaVersao = true

  obj.versoes.forEach(arrVersao => {
    const versao = arrVersao[0]

    if (versao !== versaoOficial) {
      mesmaVersao = false
    }
  })

  return mesmaVersao
}

saoMesmaVersao({ versoes: [[7], [8], [9]]})
saoMesmaVersao({ versoes: [[7], [7], [7]]})

/*
06

Abaixo da const arquivos, crie uma const que armazena uma 
expressão que retorna um boolean. 

O boolean que a sua const vai armazenar deve indicar se 
todos os itens do array arquivos contém a sequência de 
caracteres 'js'.
*/

const perigo = {
  git: {
    arquivosCriados: ['prod/nub-noirjsevtxenehtn-i', 'prod/ved-etjsiv', 'prod/rajsone-vi'],
    arquivosDeletados: ['prod/kuic-adodnanrjsef', 'prod/repojslev-ederawtfos', 'prod/slo-otjsved-tcaer'],
    arquivosModificados: ['prod/ipa-nig-ujslp', 'prod/noitcnuf-tjssur-gnitropmi', 'prod/adniaeo-dutartselapjsa']
  }
}

const arquivos = [
  ...perigo.git.arquivosCriados,
  ...perigo.git.arquivosDeletados,
  ...perigo.git.arquivosModificados
]

/*
07

Crie uma função que recebe dois arrays como argumentos. 

Sua função deve retornar um novo array com todos os itens 
dos dois arrays recebidos como argumento. 

Teste sua função usando os dois arrays abaixo.

Não use for loop nem forEach. 
*/

const bandasAnos60 = ['Pink Floyd', 'Deep Purple', 'Black Sabbath', 'Led Zeppelin']
const bandasAnos70 = ['Queen', 'Eagles', 'Aerosmith', 'AC/DC', 'Journey', 'Kiss']

/*
08

A função mudaNomeProduto está modificando o nome do produto 
que recebeu como argumento. 

Refatore-a para que, ao invés de modificar o objeto 
original, ela retorne um novo objeto já com o nome certo do 
produto. 

O novo objeto que a função retornar deve conter as mesmas 
propriedades do objeto original (id e nome). 
*/

const mudaNomeProduto = produto => {
  produto.nome += ' - PlayStation 5'
  return produto
}

const produtos = [
  { id: 'fd-f9g', nome: 'Marvel\'s Spider-Man 2' },
  { id: 'wd7ye-fs', nome: 'Fire TV Stick | Streaming em Full HD com Alexa' },
  { id: 'f4h-d8if-3', nome: 'Controle Dualsense - Midnight Black' },
  { id: 'p8fi-sf', nome: 'Echo Pop Smart speaker' },
  { id: 'g79f-8qs', nome: 'Clamper Energia 5 Tomadas' }
]

const novoProduto = mudaNomeProduto(produtos[0])
