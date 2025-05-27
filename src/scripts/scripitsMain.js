
const tarea1 = document.querySelector('#tarea1');
const tarea2 = document.querySelector('#tarea2');
const tarea3 = document.querySelector('#tarea3');
const tarea4 = document.querySelector('#tarea4');
const tarea5 = document.querySelector('#tarea5');
const tarea6 = document.querySelector('#tarea6');

// Ejercicio 1: unir palabras
tarea1.addEventListener('click', () => {
  let array1 = ["This", "is", "a", "sentence."];
  function printOutString(array) {
    let nuevoTexto = '';
    for (let i = 0; i < array.length; i++) {
      nuevoTexto += " " + array[i];
    }
    alert('del array ['+array1+'] se hace la nueva sentencia: '+ nuevoTexto.trim());
  }
  printOutString(array1);
});

// Ejercicio 2: duplicar valores
tarea2.addEventListener('click', () => {
  let numberArray = [1, 2, 4, 5];
  function duplicateArray(array) {
    let duplicados = array.map(num => num * 2);
    alert(`Del array original ${numberArray} se duplico a ${duplicados}`);
  }
  duplicateArray(numberArray);
});

// Ejercicio 3: suma y producto
tarea3.addEventListener('click', () => {
  let array3 = [1, 2, 3, 4];
  function multiproduct(array) {
    let sum = array.reduce((acc, curr) => acc + curr, 0);
    let product = array.reduce((acc, curr) => acc * curr, 1);
    alert(`Del array original ${array3} El producto es ${product} y la suma es ${sum}`);
  }
  multiproduct(array3);
});

// Ejercicio 4: cursos en común
tarea4.addEventListener('click', () => {
  let student1Courses = ['Math', 'English', 'Programming'];
  let student2Courses = ['Geography', 'Spanish', 'Programming'];
  function arrayFilter(array1, array2) {
    let comunes = array1.filter(course => array2.includes(course));
    alert(`De los cursos ${student1Courses} y  ${student2Courses} Cursos en común son:  ${comunes}`);
  }
  arrayFilter(student1Courses, student2Courses);
});

// Ejercicio 5: modificando array

tarea5.addEventListener('click', () => {
    let personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
  
    alert("1. Lista original:\n" + personas.join(", "));
  
    personas.splice(personas.indexOf("Dani"), 1);
    alert("2. Después de eliminar a Dani:\n" + personas.join(", "));
  
    personas.splice(personas.indexOf("Juan"), 1);
    alert("3. Después de eliminar a Juan:\n" + personas.join(", "));
  
    let indiceLuis = personas.indexOf("Luis");
    if (indiceLuis !== -1) {
      let luis = personas.splice(indiceLuis, 1)[0];
      personas.unshift(luis);
    }
    alert("4. Después de mover a Luis al inicio:\n" + personas.join(", "));
  
    personas.push("Joshua");
    alert("5. Después de agregar mi nombre al final:\n" + personas.join(", "));
  
    let mensajeMaria = "6. Iterando hasta encontrar a Maria:\n";
    for (let i = 0; i < personas.length; i++) {
      mensajeMaria += personas[i] + "\n";
      if (personas[i] === "Maria") break;
    }
    alert(mensajeMaria);
  
    let indiceMaria = personas.indexOf("Maria");
    alert("7. Índice de Maria: " + indiceMaria);
  
    alert("Resultado final:\n" + personas.join(", "));
  });

// Ejercicio 6: metodo burbuja
tarea6.addEventListener('click', () => {
    function bubbleSort(array) {
      let n = array.length;
      let intercambio;
  
      do {
        intercambio = false;
        for (let i = 0; i < n - 1; i++) {
          if (array[i] > array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            intercambio = true;
          }
        }
        n--;
      } while (intercambio);
  
      return array;
    }
  
    let entrada = [3, 6, 12, 5, 100, 1];
    let copiaEntrada = [...entrada]; 
    let salida = bubbleSort(copiaEntrada);
    alert(`Antes del acomodo burbuja: ${entrada.join(', ')}\nDespués del acomodo burbuja: ${salida.join(', ')}`);
  });