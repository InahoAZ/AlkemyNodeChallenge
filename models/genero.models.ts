import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Pelicula } from "./pelicula.models";
import { PersonajePelicula } from "./personaje_pelicula.models";


@Table({
    timestamps: false,
    tableName: "genero",
})
export class Genero extends Model {
    @Column({
        type: DataType.STRING
    })
    nombre!:string
    
    @Column({
        type: DataType.STRING
    })
    imagen!:string

    // @HasMany(()=>Pelicula)
    // peliculas!: Pelicula[]

}