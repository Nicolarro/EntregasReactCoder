import swall from 'sweetalert';



export const validar = (values) => {
  if (values.nombre.length < 5) {
      swall({title: "Nombre invalido", 
      text: "El nombre debe tener al menos 5 caracteres", 
      icon: "error",
      button: "Aceptar"});
    return false;
  }
  if (values.email.length < 7) {
    swall({title: "Email invalido", 
    text: "El email debe tener al menos 7 caracteres",
    icon: "error",
    button: "Aceptar"});
    return false;
  }
  if (values.tel.length < 8) {
    swall({title: "Telefono invalido", 
    text: "El email debe tener al menos 7 caracteres",
    icon: "error",
    button: "Aceptar"});
    return false;
  }

  return true;
};
