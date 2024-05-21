import { atom } from "jotai";
import { Cart, Character, HomeWorld } from "@/declarations";

export const loadingAtom = atom<boolean>(true);
export const charactersAtom = atom<Character[]>([]);
export const homeWorldsAtom = atom<HomeWorld[]>([]);
export const cartAtom = atom<Cart[]>([]);