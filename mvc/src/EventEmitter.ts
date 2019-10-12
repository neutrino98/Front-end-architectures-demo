interface Emitter {
    on(action: string, callbackFn: callbackFnType): void, 
    emit<T>(action: string, data: T): void
}

type callbackFnType = (...args: any) => void;

export class EventEmitter implements Emitter {
    events = new Map<string, callbackFnType>();

    on(action: string, callbackFn: callbackFnType): void {
        this.events.set(action, callbackFn); 
    }; 

    emit<T>(action: string, data?: T): void {
        const callBack: callbackFnType | undefined = this.events.get(action); 
        if(callBack) {
            callBack.call(null, data); 
        } 
        return; 
    }


} 