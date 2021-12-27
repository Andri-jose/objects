//objeto

class Auto {
    constructor(motor, color, tapiceria){
        this.motor = motor;
        this.color = color;
        this.tapiceria = tapiceria;
        
    }

    precio(aviso) {
        if (aviso == "si" || aviso == "Si") {
            return true;
        }
    }
    
    anuncio(aviso){
        if (aviso == "mas info" || aviso == "Mas info") {
            return true;
        }
    }

    ficha(){
        alert("El auto tiene un motor "+ this.motor + " es de color " + this.color + " y la tapiceria es de " + this.tapiceria);
    }

}

const mustang69 = new Auto ("v8", "negro", "cuero");


let aviso = prompt("El mustang 69 es un clasico en los autos de carreras, escriba 'Si' si esta interesado en ver el precio o 'Más Info' si desea ver la ficha tecnica");

if (mustang69.precio(aviso)) {
    alert("EL precio del auto son $12.000,00");
}

else if (mustang69.anuncio(aviso)) {
    mustang69.ficha();
}

else {
    alert("Indique un dato correcto");
}

