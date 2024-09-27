const albums = [
    {
        src: "https://m.media-amazon.com/images/I/51HLHvEdr4L._UF1000,1000_QL80_.jpg",
        title: "Favourite Worst Nightmare"
    },
    {
        src: "https://m.media-amazon.com/images/I/51mb9JZqLUL._UF1000,1000_QL80_.jpg",
        title: "Humbug"
    },
    {
        src: "https://m.media-amazon.com/images/I/61Jd+wEowPL._UF1000,1000_QL80_.jpg",
        title: "AM"
    },
    {
        src: "https://indierocks.sfo3.digitaloceanspaces.com/wp-content/uploads/2018/04/Arctic-Monkeys_Tranquility-Base-Hotel-Casino.jpg",
        title: "Tranquility Base Hotel and Casino"
    },
    {
        src: "https://indierocks.sfo3.digitaloceanspaces.com/wp-content/uploads/2022/08/Arctic-Monkeys-The-Car-2022.jpeg",
        title: "The Car"
    },
]

class Alumno{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materias = [];
    }

    inscribirMateria(materia, calificacion) {
        this.materias.push({
            materia: materia,
            calificacion: calificacion,
    })
    }
}

document.addEventListener("DOMContentLoaded", () => renderCards());

const renderCards = () => {
    const cardContainer = document.querySelector(".card-container");
    while(cardContainer.firstChild){
        cardContainer.firstChild.remove();
    }
    albums.forEach((album) => {
        cardContainer.insertAdjacentHTML("beforeend", `
                <div class="card">
                    <div class="image-container">
                        <img src="${album.src}" alt="image-album">
                    </div>
                    <div class="info-container">
                        <h3>${album.title}</h3>
                    </div>
                    <button>Comprar</button>
                </div>
            `)
    })

    const cardBtns = [...document.querySelectorAll(".card button")];
    cardBtns.forEach((button) => {
        button.addEventListener("click", (e) => console.log(`Alguien quiere comprar el disco ${e.target.parentElement.children[1].children[0].textContent}`))
    })
}

const alumno1 = new Alumno("Eduardo", "Lara", 22);

alumno1.inscribirMateria("Matematicas", parseFloat(10));

console.log(`El alumno ${alumno1.nombre} esta inscrito a ${alumno1.materias[0].materia} y tiene una calificación de ${alumno1.materias[0].calificacion}`);

const saludo = (nombre = "Usuario") => {
    console.log(`Holaaa ${nombre}`);
}

saludo("Diego");
saludo(albums);