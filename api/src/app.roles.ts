import { RolesBuilder } from "nest-access-control";

export enum AppRoles {
  ADMIN = 'Administrador',
  MANAGER = 'Gerente',
  EMPLOYEE = 'Empleado',
}

export enum AppResource {
  USER = 'USER',
  COMPANY = 'COMPANY'
}

export const roles: RolesBuilder = new RolesBuilder();

roles
  //EMPLOYEE ROLES
  .grant(AppRoles.EMPLOYEE)
  .readOwn([AppResource.USER])
  .updateOwn([AppResource.USER])
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
  .updateAny([AppResource.USER])
  .createAny([AppResource.COMPANY])
  .updateAny([AppResource.COMPANY])
  .deleteAny([AppResource.COMPANY]);