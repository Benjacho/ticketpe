import {
  Entity,
  Column,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: number;

  @Column({ nullable: false })
  providerId: string;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  name?: string;
}
