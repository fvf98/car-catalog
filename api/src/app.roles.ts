import { RolesBuilder } from "nest-access-control";

export enum AppRoles {
  ADMIN = 'Admin',
  MANAGER = 'Manager',
  EMPLOYEE = 'Employee',
}

export enum AppResource {
  USER = 'USER',
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
  .updateAny([AppResource.USER])
  .createAny([AppResource.USER])
  .deleteAny([AppResource.USER])
  // ADMIN ROLES
  .grant(AppRoles.ADMIN)
  .extend(AppRoles.MANAGER);