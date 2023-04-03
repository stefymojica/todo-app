import { writable } from 'svelte/store';

export type NoteStatus = "Backlog" | "Pending" | "InProgress" | "Done"
export interface NoteItem {
    id: number;
    text:string;
    status: NoteStatus;
}

export const items = writable<NoteItem[]>([]);

export const lastIndex = writable<number>(0);
