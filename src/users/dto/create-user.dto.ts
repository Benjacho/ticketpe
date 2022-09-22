import { Provider } from './user.dto';

export class CreateUserDto {
  provider: Provider;
  providerId: string;
  email: string;
  name: string;
}
