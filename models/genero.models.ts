import { Column, DataType, HasMany, Table } from "sequelize-typescript";
import { DataTypes, Model, Optional } from "sequelize";
// import { Pelicula } from "./pelicula.models";
// import { PersonajePelicula } from "./personaje_pelicula.models";
import sequelizeConnection from '../db/config'


interface GeneroAttributes {
    id: number;
    nombre: string;
    imagen: string;
}

export interface GeneroInput extends Optional<GeneroAttributes, 'id'>{}
export interface GeneroOutput extends Required<GeneroAttributes>{}

export class Genero extends Model<GeneroAttributes, GeneroInput> implements GeneroAttributes {
    public id!: number;
    public nombre!: string;
    public imagen!: string;
    
}

Genero.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING
    }
}, {sequelize: sequelizeConnection});



