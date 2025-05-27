export function initTarea2() {
    const tarea2 = document.querySelector('#tarea2');
    tarea2.addEventListener('click', () => {
      let numberArray = [1, 2, 4, 5];
  
      for (let i = 0; i < numberArray.length; i++) {
        numberArray[i] *= 2;
      }
  
      alert("Ejercicio 2:\n" + numberArray.join(', '));
    });
  }  