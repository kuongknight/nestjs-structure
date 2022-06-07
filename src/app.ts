import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

const modules = { AuthModule, UserModule };

export type AppModuleKey = keyof typeof modules;

export class AppFactory {
  static create(moduleKeys?: AppModuleKey[]): any {
    const imports = moduleKeys
      ? moduleKeys.map((key) => modules[key])
      : Object.values(modules);

    @Module({
      imports,
      controllers: [],
      providers: [],
    })
    class AppModule {}
    return AppModule;
  }
}
