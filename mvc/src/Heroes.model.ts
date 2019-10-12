import { filteringHeroes, resetFilter } from './actions';
import { EventEmitter } from './EventEmitter';

interface Hero {
    name: string; 
    lastName: string; 
    gender: string; 
}

export class HeroModel {
    emitter: EventEmitter; 
    state: { filter: string, heroes: Hero[] }

    constructor(emitter: EventEmitter) {
        this.emitter = emitter;
        this.state = {
            filter: '', 
            heroes: []
        }
    }    

    filtering(filter: string): void {
        // ...some filtering
        const filteredHeroes: any = []; 
        this.emitter.emit(filteringHeroes, filteredHeroes);
    }

    reset(): void {
        this.state.filter = ''; 
        this.emitter.emit(resetFilter)
    }


}