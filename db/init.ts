import { Genero } from "../models/genero.models";

export const dbInit = () => {
    Genero.sync();
}