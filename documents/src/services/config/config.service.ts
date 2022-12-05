import { Transport } from '@nestjs/microservices';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      port: process.env.DOCUMENTS_SERVICE_PORT || 3002,
    };
    this.envConfig.baseUri = process.env.BASE_URI || 'http://127.0.0.1';
    this.envConfig.gatewayPort = process.env.API_GATEWAY_PORT || 3000;
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
