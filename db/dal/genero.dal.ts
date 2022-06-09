import { Op } from "sequelize";
import { Genero } from "../../models/genero.models";

import { GeneroInput, GeneroOutput } from "../../models/genero.models";


export const create = async(payload: GeneroInput): Promise<GeneroOutput> => {
    const genero = await Genero.create(payload);
    return genero;
}

export const update = async (id: number, payload: Partial<GeneroInput>): Promise<GeneroOutput> => {
    const genero = await Genero.findByPk(id);
    if (!genero) {
        throw new Error('Not found');
    }
    const updatedGenero = await (genero as Genero).update(payload);
    return updatedGenero;
}

export const deleteById = async (id:number): Promise<boolean> => {
    const deletedGeneroCount = await Genero.destroy({
        where: {id}
    })
    return !!deletedGeneroCount;
}

export const getById = async (id:number): Promise<GeneroOutput> => {
    const genero = await Genero.findByPk(id);
    if(!genero){
        throw Error('Not found');
    }
    return genero;
}

export const getAll = async (): Promise<GeneroOutput[]> => {
    return Genero.findAll();
}