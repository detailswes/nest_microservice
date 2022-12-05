import { Transport } from '@nestjs/microservices';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;
  constructor() {
    this.envConfig = {};
    this.envConfig.port = process.env.API_GATEWAY_PORT || 3000;
    this.envConfig.personsService = {
      options: {
        port: process.env.PERSONS_SERVICE_PORT || 3001,
        host: process.env.PERSONS_SERVICE_HOST || '127.0.0.1',
      },
      transport: Transport.TCP,
    };
       this.envConfig.documentsService = {
         options: {
           port: process.env.DOCUMENTS_SERVICE_PORT || 3002,
           host: process.env.DOCUMENTS_SERVICE_HOST || '127.0.0.1',
         },
         transport: Transport.TCP,
       };
  }
  get(key: string): any {
    return this.envConfig[key];
  }
}



