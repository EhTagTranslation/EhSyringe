import { Container as ContainerStatic, ContainerInstance } from 'typedi';
export {
    Service,
    Inject,
    InjectMany,
    Token,
    ObjectType,
    ServiceIdentifier,
    ServiceMetadata,
    ServiceOptions,
} from 'typedi';
export type Container = ContainerInstance;
export const Container = ContainerStatic.of('default');
