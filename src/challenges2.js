// Desafio 10
function techList(tech, name) {
  /* Documentação sobre .push consultada: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  Referência sobre como checar se um array está vazio: https://flexiple.com/check-if-array-empty-javascript/#:~:text=If%20the%20length%20of%20the,the%20function%20will%20return%20False
  Metódo de sort retirado de: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
  */
  let allTechs = [];

  for (let index in tech){
    let objeto = {
        tech: tech[index],
        name: name,
      }
    allTechs.push(objeto);
    }

  if (tech.length == 0) {
    return 'Vazio!';
  } else {
    return allTechs.sort(function(a, b) {
      let techA = a.tech.toLowerCase();
      let techB = b.tech.toLowerCase();
  
      if (techA < techB) {
        return -1;
      }
      if (techA > techB) {
        return 1;
      }
      return 0;
    });
  }
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  let invalidNumbers = numbers.some(checkNumbers);

  if (numbers.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  if (invalidNumbers) {
    return "não é possível gerar um número de telefone com esses valores";
  } 


  return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  
}

//solução baseada em: https://www.w3schools.com/jsref/jsref_some.asp, https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/
function checkNumbers(check) {
  if (check < 0 || check > 9) {
    return true;
  }
}

generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumCheck = triangleSum(lineA, lineB, lineC), diffCheck = triangleDiff(lineA, lineB, lineC);

  if (sumCheck === true && diffCheck === true) {
    return true;
  } else {
    return false;
  }
}

function triangleSum(a, b, c) {
  if (a > (b + c) || b > (a + c) || c > (a + b)) {
    return false;
  } else {
    return true;
  }
}

function triangleDiff(a, b, c) {
  if(a < (Math.abs(b-c)) || b < (Math.abs(a-c) || c < (Math.abs(a-b)))) {
    return false;
  } else {
    return true;
  }
}

triangleCheck(10, 1, 8)

// Desafio 13
function hydrate(string) {
  //Usado como referência para o exercício: https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript, http://www.regular-expressions.info/javascript.html
  let onlyNumbers = string.replace(/[^1-9]/g,''), sum = 0, waterGlasses = ``;

  for(let index of onlyNumbers){
    sum += parseInt(index);
  }

  if (sum === 1) {
    waterGlasses = `${sum} copo de água`
  } else {
    waterGlasses = `${sum} copos de água`;
  }
  return waterGlasses;
}

hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
