declare module 'google-auto-auth' {
  interface Credentials {
    client_email: string;
    private_key: string;
  }
  interface Environment {
    IS_APP_ENGINE: boolean;
    IS_CLOUD_FUNCTION: boolean;
    IS_COMPUTE_ENGINE: boolean;
  }
  class Auth {
    constructor(config: any);

    authorizeRequest(reqOpts: any, callback: (err: any, authorizedReqOpts: any) => void): void;

    getAuthClient(callback: (err: any, authClient: any) => void): void;

    getCredentials(callback: (err: any, credentials: Credentials) => void): void;

    getEnvironment(callback: (err: any, environment: Environment) => void): void;

    getProjectId(callback: (err: any, projectId: string) => void): void;

    getToken(callback: (err: any, token: string) => void): void;

    isAppEngine(callback: (err: any, isAppEngine: boolean) => void): void;

    isCloudFunction(callback: (err: any, isCloudFunction: boolean) => void): void;

    isComputeEngine(callback: (err: any, isComputeEngine: boolean) => void): void;
  }

  export = Auth;
}