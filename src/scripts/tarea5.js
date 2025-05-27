export function initTarea5() {
    const tarea5 = document.querySelector('#tarea5');
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
  }
  