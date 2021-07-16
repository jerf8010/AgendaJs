export class Todo {

    constructor( tarea ) {

        this.tarea = tarea;
        
        // automaticamente se va a crear todo lo siguiente a partir de la tarea ingresada
        this.id    = new Date().getTime();
        this.completado = false;
        this.creado =new Date();
    }

}