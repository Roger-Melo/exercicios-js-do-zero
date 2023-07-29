/*
Nunca é demais lembrar: resolva os exercícios usando apenas 
as funcionalidades da linguagem mostradas no Curso 
JavaScript do Zero. 

Assim, você se certifica se realmente aprendeu o que foi 
mostrado =)
*/

/*
01

No código abaixo, o nome da rua em que João Almeida mora 
foi modificado acidentalmente. 

Refatore o código para que Joana more na mesma cidade e 
estado que João, mas a rua seja 'Rua Rio de Janeiro'.

Sua refatoração pode ser feita na criação do objeto person2.

Teste o seu código através das duas condições descritas 
abaixo:

1) Rua do objeto person é diferente de rua do objeto 
person2.

2) Objeto address de person é diferente de objeto address 
de person2.

As duas condições devem retornar true.
*/

const person = {
  name: 'João Almeida',
  age: 29,
  address: {
    street: 'Rua Minas Gerais',
    city: 'São Paulo',
    state: 'São Paulo'
  }
}

const person2 = {
  ...person,
  name: 'Joana Cruz'
}

person2.address.street = 'Rua Rio de Janeiro'

/*
02

Crie uma função getMessage que recebe como argumento o 
array que a função getHeroes retorna. 

Na função getMessage, cada item do array deve ser 
acessado e a função deve retornar a seguinte string:

O nome do herói no 1º item é Batman e seu nome verdadeiro é Bruce Wayne.
O nome da heroína no 2º item é Wonder Woman e seu nome verdadeiro é Diana Prince.
O nome do herói no 3º item é Spider-Man e seu nome verdadeiro é Peter Parker.

Sua string deve ter 3 linhas, exatamente como formatado 
acima. Para quebrar linha em uma string, você pode usar o 
caractere especial \n no fim de cada linha.

Evite a repetição de "obj." em seu código.
*/

const getHeroes = () => [
  { name: 'Batman', realName: 'Bruce Wayne', gender: 'Male' },
  { name: 'Wonder Woman', realName: 'Diana Prince', gender: 'Female' },
  { name: 'Spider-Man', realName: 'Peter Parker', gender: 'Male' }
]

/*
03

Crie uma função multiply que recebe como argumento o 
array objs. 

A função multiply deve retornar a multiplicação entre id 
do primeiro objeto do array e code do segundo objeto. 

Evite a repetição de "arr[index]" em seu código.
*/

const objs = [{ id: 3, code: 31 }, { id: 7, code: 21 }]

/*
04

Embora a propriedade uva exista no objeto fruits, a função 
está retornando a string à direita do operador "ou" (||).

Faça o único ajuste necessário na linha do return para que 
a função retorne o valor da propriedade uva. 

Não substitua fruits.fruit por fruits.uva. 
*/

const getfruitBenefits = fruit => {
  const fruits = { 
    abacaxi: 'Ajuda a fortalecer o sistema imunológico e eliminar inflamações.',
    banana: 'Auxilia a regular o sistema nervoso e o aparelho digestivo.',
    uva: 'Rica em carboidratos, altamente energética.'
  }

  return fruits.fruit || 'Não há informações da fruta =/'
}

const benefits = getfruitBenefits('uva')

/*
05

Modifique a linha do return abaixo de forma que a 
propriedade dentro do objeto payload seja nomeada 
dinamicamente. 

Após esta modificação, a const product deve armazenar um 
objeto como este: 

{
  type: 'UPDATE_SIZE',
  payload: {
    g: 'Jaqueta Trucker Jeans Com Recortes E Forro De Sherpa Azul Claro'
  }
}
*/

const updateInfo = product => {
  const { name, value } = product.target
  const action = name.includes('size-') ? 'UPDATE_SIZE' : 'UPDATE_FIELD'
  const fieldName = name.includes('size-') ? name.replace('size-', '') : name

  return { type: action, payload: { fieldName: value } }
}

const product = updateInfo({ 
  target: {
    name: 'size-g', 
    value: 'Jaqueta Trucker Jeans Com Recortes E Forro De Sherpa Azul Claro' 
  }
})

/*
06

O código abaixo está funcionando e é de um exercício que 
fizemos anteriormente. 

Renomeie o que está em português para inglês.
*/

const pegaRespostasUsuario = () => ['A', 'B', 'A', 'D']

const pegaPontuacao = respostasUsuario => {
  const ultimaResposta = respostasUsuario[3]

  if (ultimaResposta === 'A') {
    return 50
  } else if (ultimaResposta === 'C') {
    return 25
  } else {
    return 100
  }
}

const respostasUsuario = pegaRespostasUsuario()
const pontuacao = pegaPontuacao(respostasUsuario)

/*
07

Refatore a função que anteriormente se chamava 
pegaPontuacao. 

Dicas:

Você pode substituir if, else if e else por uma estrutura 
de dados e acessar os dados de forma dinâmica.
*/
