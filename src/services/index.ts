import { Container as ContainerStatic } from 'typedi';
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
export const Container = ContainerStatic.of('default');
