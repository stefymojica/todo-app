import { writable } from 'svelte/store';
export interface NoteItem {
    text:string;
    status:"Pending" | "Done"
}

export const items = writable<NoteItem[]>([]);

