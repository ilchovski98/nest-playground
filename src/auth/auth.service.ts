import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup(): string {
    return 'I am signup...';
  }

  signin() {
    return 'I am signip...';
  }
}
