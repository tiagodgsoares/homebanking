import { Movement } from "./movement.interface";

export interface Account {
    id: string,
    userEmail: string,
    balance: number,
    movements: Movement[],
}