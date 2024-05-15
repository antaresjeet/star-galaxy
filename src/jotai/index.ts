import { atom } from "jotai";
import { Character, HomeWorld } from "@/declarations";
export const charactersAtom = atom<Character[]>([]);
export const homeWorldsAtom = atom<HomeWorld[]>([]);