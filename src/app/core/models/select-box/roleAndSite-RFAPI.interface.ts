export interface RoleAndSiteRFAPI {
  statusCode: number;
  message: string;
  content: {
    role: string[];
    site: string[];
  };
}
