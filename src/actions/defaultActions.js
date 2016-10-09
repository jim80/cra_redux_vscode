export const DEFAULT_DECREMENT = 'DEFAULT_DECREMENT', 
             DEFAULT_INCREMENT = 'DEFAULT_INCREMENT',
             DEFAULT_SET = 'DEFAULT_SET'

export function defaultIncrement(){
    return {type:DEFAULT_INCREMENT}
}

export function defaultDecrement(){
    return {type:DEFAULT_DECREMENT}
}

export function defaultSet(value){
    return {type:DEFAULT_SET, payload: value }
}