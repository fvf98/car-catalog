import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User as UserEntity } from '../user/entities';
import { LocalAuthGuard } from './guards';
import { Auth, User } from '../common/decorators';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() loginDto: LoginDto, @User() user: UserEntity) {
        const data = await this.authService.login(user);
        return {
            message: 'Login exitoso',
            data,
        };
    }

    @Auth()
    @Get('refresh')
    refreshToken(@User() user: UserEntity) {
        const data = this.authService.login(user);
        return {
            message: 'Refresh exitoso',
            data,
        };
    }
}
