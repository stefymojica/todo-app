import { derived, writable } from 'svelte/store';
export type NoteStatus = "Pending" | "InProgress" | "Done"
export interface NoteItem {
    id: number;
    text:string;
    status: NoteStatus;
    updated_at: string;
}

export const items = writable<NoteItem[]>([]);

export const lastIndex = writable<number>(0);


