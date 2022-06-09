import * as generoDal from '../../db/dal/genero.dal'

import { GeneroInput, GeneroOutput } from '../../models/genero.models'


export const create = (payload: GeneroInput): Promise<GeneroOutput> => {
    return generoDal.create(payload);
}

export const update = (id:number, payload:Partial<GeneroInput>): Promise<GeneroOutput> => {
    return generoDal.update(id, payload);
}

export const deleteById = (id:number): Promise<boolean> => {
    return generoDal.deleteById(id);
}

export const getById = (id:number): Promise<GeneroOutput> => {
    return generoDal.getById(id);
}

export const getAll = (): Promise<GeneroOutput[]> => {
    return generoDal.getAll();
}