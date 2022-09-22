import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Provider } from './dto/user.dto';

@Entity()
export class User {
  @ObjectIdColumn()
  id: number;

  @Column({ nullable: false })
  provider: Provider;

  @Column({ nullable: false })
  providerId: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  name?: string;

  @Column({ nullable: false })
  @CreateDateColumn()
  created_at: Date;

  @Column({ nullable: false })
  @UpdateDateColumn()
  updated_at: Date;
}
