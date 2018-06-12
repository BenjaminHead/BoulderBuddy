/// <reference types="node" />
import { EventEmitter } from 'events';
import { InstallTarget } from './index';
export interface ListByPackage {
    [key: string]: string[];
}
export declare class LocalInstaller extends EventEmitter {
    private sourcesByTarget;
    constructor(sourcesByTarget: ListByPackage);
    on(event: 'install_targets_identified', listener: (installTargets: InstallTarget[]) => void): void;
    on(event: 'install_start', listener: (toInstall: ListByPackage) => void): this;
    on(event: 'installed', listener: (pkg: string, stdout: string, stderr: string) => void): this;
    on(event: 'packing_start', listener: (allSources: string[]) => void): this;
    on(event: 'packed', listener: (location: string) => void): this;
    on(event: 'packing_end' | 'install_end', listener: () => void): this;
    emit(event: 'install_targets_identified', installTargets: InstallTarget[]): boolean;
    emit(event: 'install_start', toInstall: ListByPackage): boolean;
    emit(event: 'installed', pkg: string, stdout: string, stderr: string): boolean;
    emit(event: 'packing_start', allSources: string[]): boolean;
    emit(event: 'packed', location: string): boolean;
    emit(event: 'packing_end' | 'install_end'): boolean;
    install(): Promise<InstallTarget[]>;
    private installAll(installTargets);
    private installOne(target);
    private resolvePackages();
    private identifyInstallTargets(packages);
    private packAll();
    private packOne(directory);
    private removeAllPackedTarballs(allSources, packages);
}
export declare function resolve(packagesByTarget: ListByPackage): ListByPackage;
