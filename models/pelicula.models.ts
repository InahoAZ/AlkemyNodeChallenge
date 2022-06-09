// import {Table, Model, Column, DataType, ForeignKey, BelongsToMany, BelongsTo } from "sequelize-typescript";
// import { Genero } from "./genero.models";
// import { Personaje } from "./personaje.models";
// import { PersonajePelicula } from "./personaje_pelicula.models";

// @Table({
//     timestamps: false,
//     tableName: "peliculas",
// })

// export class Pelicula extends Model {
//     @Column({
//         type: DataType.STRING,
//         allowNull: false
//     })
//     imagen!: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false
//     })
//     titulo!: string;

//     @Column({
//         type: DataType.DATE,
//         allowNull: false
//     })
//     fecha_creacion!: Date;

//     @Column({
//         type: DataType.ENUM('1','2','3','4','5'),
//         allowNull: false
//     })
//     calificacion!: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false
//     })
//     historia!: string;

//     @BelongsToMany(() => Personaje, () => PersonajePelicula)
//     personajes!: Personaje[];

//     @ForeignKey(() => Genero)
//     @Column({
//         type: DataType.NUMBER
//     })
//     generoId!: number;

//     @BelongsTo(()=>Genero)
//     genero!: Genero;
// }