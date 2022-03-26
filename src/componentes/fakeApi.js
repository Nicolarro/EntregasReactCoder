const listadoProductos = [
  {
    id: '1',
    title: "SELECCION",
    destacados: true,
    price: 250,
    pictureUrl: "https://i.ibb.co/Qf0MtJc/Foto-Cafe-Seleccion.jpg",
  },
  {
    id: '2',
    title: "NOIR",
    destacados: false,
    price: 200,
    pictureUrl: "https://i.ibb.co/Hh8wZFD/Foto-Cafe-Noir.jpg",
  },
  {
    id: '3',
    title: "SUAVE",
    destacados: true,
    price: 125,
    pictureUrl: "https://i.ibb.co/1nPjVMH/Foto-Sensaciones-Suave.png",
  },
  {
    id: '4',
    title: "INTENSO",
    destacados: false,
    price: 150,
    pictureUrl: "https://i.ibb.co/nPN102r/Foto-Cafe-Intenso.png",
  },
  {
    id: '5',
    title: "SUPERIOR",
    destacados: true,
    price: 200,
    pictureUrl: "https://i.ibb.co/GP7C8dr/Foto-Superior.jpg",
  },
];

export const getProducts = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(listadoProductos);
    }, 2000);
  } else {
    reject("No trajo el listado");
  }
});
