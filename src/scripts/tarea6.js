export function initTarea6() {
    const tarea6 = document.querySelector('#tarea6');
    tarea6.addEventListener('click', () => {
      function bubbleSort(array) {
        let n = array.length;
        let swapped;
  
        do {
          swapped = false;
          for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
              let temp = array[i];
              array[i] = array[i + 1];
              array[i + 1] = temp;
              swapped = true;
            }
          }
          n--;
        } while (swapped);
  
        return array;
      }
  
      let entrada = [3, 6, 12, 5, 100, 1];
      let copiaEntrada = [...entrada];
      let salida = bubbleSort(copiaEntrada);
      alert(`Antes del acomodo burbuja: ${entrada.join(', ')}\nDespués del acomodo burbuja: ${salida.join(', ')}`);
    });
  }
  