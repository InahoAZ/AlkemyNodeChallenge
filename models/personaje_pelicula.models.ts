import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Pelicula } from "./pelicula.models";
import { Personaje } from "./personaje.models";

@Table({
    tableName: 'personaje_pelicula'
})
export class PersonajePelicula extends Model {
    @ForeignKey(()=> Personaje)
    @Column({
        type: DataType.NUMBER
    })
    personajeId!: number

    @ForeignKey(()=> Pelicula)
    @Column({
        type: DataType.NUMBER
    })
    peliculaId!: number
    
}