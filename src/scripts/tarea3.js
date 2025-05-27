export function initTarea3() {
    const tarea3 = document.querySelector('#tarea3');
    tarea3.addEventListener('click', () => {
      let array3 = [1, 2, 3, 4];
      let suma = 0;
      let producto = 1;
  
      for (let i = 0; i < array3.length; i++) {
        suma += array3[i];
        producto *= array3[i];
      }
  
      alert(`Ejercicio 3:\nLa suma es ${suma}\nEl producto es ${producto}`);
    });
  }
  