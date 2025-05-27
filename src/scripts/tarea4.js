export function initTarea4() {
    const tarea4 = document.querySelector('#tarea4');
    tarea4.addEventListener('click', () => {
      let estudiante1 = ['Math', 'English', 'Programming'];
      let estudiante2 = ['Geography', 'Spanish', 'Programming'];
  
      let comunes = estudiante1.filter(curso => estudiante2.includes(curso));
  
      alert("Ejercicio 4:\nCursos en común: " + comunes.join(', '));
    });
  }
  