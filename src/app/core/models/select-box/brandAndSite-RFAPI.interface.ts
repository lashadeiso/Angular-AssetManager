export interface BrandAndSiteRFAPI {
  statusCode: number;
  message: string;
  content: {
    brand: string[];
    site: string[];
  };
}
