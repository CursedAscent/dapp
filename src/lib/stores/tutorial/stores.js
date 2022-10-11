import { writable } from 'svelte/store';

export const firstTimeMap = writable(true);
export const pickedTutorialClass = writable(0x1);