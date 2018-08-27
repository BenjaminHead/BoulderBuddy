export declare class Options {
    readonly dependencies: string[];
    readonly options: string[];
    constructor(argv: string[]);
    validate(): Promise<void>;
    readonly help: boolean;
    readonly targetSiblings: boolean;
    readonly save: boolean;
    private flag(...options);
}
