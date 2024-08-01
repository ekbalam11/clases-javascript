const fechaActual = new Date();
console.log(fechaActual);

class DNI {

    /**
     * 
     * @param {string} titular Indica el titular del Dni
     * @param {string} numero  Código en formato 12345678A
     * @param {string} caducidad  Fecha de caducidad del DNI, en format año-mes-dia
     */
    constructor(titular, numero, caducidad) {
        this.titular = titular;
        this.numero = numero;
        this.caducidad = caducidad;
    }


    // Nos devuelve 'true' o 'false' indicando si el DNI está caducado o no
    estaCaducado() {
        if(this.caducidad < fechaActual) {
            return true
        } else {
            return false
        }

    }

    // Debe devolver 'true' si el DNI está bien formado, o 'false' en caso contrario
    esDniFormatoValido() {
       const esDniValido = /^\d{8}[a-zA-Z]$/;
       return esDniValido.test(this.numero)
        } 

    }



const midni = new DNI("Pedro Vallés", "1234567A", "2020-10-10");
console.log(midni.estaCaducado());
console.log(midni.esDniFormatoValido());

