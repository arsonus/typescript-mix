export declare type Constructor<T> = new (...args: any[]) => T;
export declare type Mixin<T> = Constructor<T> | object;
/**
 * Takes a list of classes or object literals and adds their methods
 * to the class calling it.
 */
export declare function use(...options: Mixin<any>[]): (target: any, propertyKey: string) => void;
/**
 * Takes a method as a parameter and add it to the class calling it.
 */
export declare function delegate(method: (...args: any[]) => any): (target: any, propertyKey: string) => void;
