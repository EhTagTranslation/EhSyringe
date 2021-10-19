import { Container as ContainerStatic, ContainerInstance } from 'typedi';
export { Service, Inject, InjectMany, Token } from 'typedi';
export type { ServiceIdentifier, ServiceMetadata, ServiceOptions } from 'typedi';
export type Container = ContainerInstance;
export const Container = ContainerStatic.of('default');
