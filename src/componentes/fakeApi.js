export const listadoProductos = [
  {
    id: '1',
    title: "SELECCION",
    destacados: true,
    categoria: "premium",
    price: 250,
    stock:50,
    pictureUrl: "https://i.ibb.co/Qf0MtJc/Foto-Cafe-Seleccion.jpg",
  },
  {
    id: '2',
    title: "NOIR",
    destacados: false,
    categoria: "premium",
    price: 200,
    stock:50,
    pictureUrl: "https://i.ibb.co/Hh8wZFD/Foto-Cafe-Noir.jpg",
  },
  {
    id: '3',
    title: "SUAVE",
    destacados: true,
    categoria: "clasicos",
    price: 125,
    stock:50,
    pictureUrl: "https://i.ibb.co/1nPjVMH/Foto-Sensaciones-Suave.png",
  },
  {
    id: '4',
    title: "INTENSO",
    destacados: false,
    categoria: "clasicos",
    price: 150,
    stock:50,
    pictureUrl: "https://i.ibb.co/nPN102r/Foto-Cafe-Intenso.png",
  },
  {
    id: '5',
    title: "SUPERIOR",
    destacados: true,
    categoria: "premium",
    price: 200,
    stock:50,
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


