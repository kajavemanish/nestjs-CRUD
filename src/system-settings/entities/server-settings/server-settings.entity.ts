import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import * as uuidv4 from 'uuid/v4';
import { SERVICE } from '../../../constants/app-strings';

@Entity()
export class ServerSettings extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  appURL: string;

  @Column()
  authServerURL: string;

  @Column()
  clientId: string;

  @Column()
  clientSecret: string;

  @Column()
  profileURL: string;

  @Column()
  tokenURL: string;

  @Column()
  introspectionURL: string;

  @Column()
  authorizationURL: string;

  @Column()
  callbackURLs: string;

  @Column()
  revocationURL: string;

  @Column()
  service: string = SERVICE;

  constructor() {
    super();
    if (!this.uuid) {
      this.uuid = uuidv4();
    }
  }
}
