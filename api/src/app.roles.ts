import { RolesBuilder } from "nest-access-control";

export enum AppRoles {
  ADMIN = 'Administrador',
  MANAGER = 'Gerente',
  EMPLOYEE = 'Empleado',
}

export enum AppResource {
  USER = 'USER',
  COMPANY = 'COMPANY',
  CAR = 'CAR'
}

export enum AppPossession {
  OWN = 'own',
  ANY = 'any'
}

export enum AppActions {
  CREATE = 'create',
  UPDATE = 'update',
  READ = 'read',
  DELETE = 'delete'
}

export const roles: RolesBuilder = new RolesBuilder();

roles
  //EMPLOYEE ROLES
  .grant(AppRoles.EMPLOYEE)
  .readOwn([AppResource.USER])
  .updateOwn([AppResource.USER, AppResource.CAR])
  .createOwn([AppResource.CAR])
  // MANAGER ROLES
  .grant(AppRoles.MANAGER)
  .extend(AppRoles.EMPLOYEE)
  .readAny([AppResource.USER])
  .createAny([AppResource.USER])
  .deleteAny([AppResource.USER])
  .updateOwn([AppResource.COMPANY])
  // ADMIN ROLES
  .grant(AppRoles.ADMIN)
  .extend(AppRoles.MANAGER)
  .createAny([AppResource.COMPANY, AppResource.CAR])
  .updateAny([AppResource.COMPANY, AppResource.CAR, AppResource.USER])
  .deleteAny([AppResource.COMPANY, AppResource.CAR]);