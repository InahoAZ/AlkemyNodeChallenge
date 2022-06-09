// import {Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
// import { Pelicula } from "./pelicula.models";
// import { PersonajePelicula } from "./personaje_pelicula.models";

// @Table({
//     timestamps: false,
//     tableName: "personajes",
// })
// export class Personaje extends Model {
//     @Column({
//         type: DataType.STRING,
//         allowNull: false
//     })
//     imagen!: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false
//     })
//     nombre!: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false
//     })
//     edad!: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false
//     })
//     peso!: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false
//     })
//     historia!: string;
    
//     @BelongsToMany(() => Pelicula, () => PersonajePelicula)
//     @Column({
//         type: DataType.ARRAY(DataType.INTEGER),
//         allowNull: false
//     })
//     pelicula!: Array<Pelicula & {PersonajePelicula: PersonajePelicula}>;
// }