export function initTarea1() {
    const tarea1 = document.querySelector('#tarea1');
    tarea1.addEventListener('click', () => {
      let array = ["This", "is", "a", "sentence."];
      let resultado = '';
  
      for (let i = 0; i < array.length; i++) {
        resultado += ' ' + array[i];
      }
  
      alert("Ejercicio 1:\n" + resultado.trim());
    });
  }
  