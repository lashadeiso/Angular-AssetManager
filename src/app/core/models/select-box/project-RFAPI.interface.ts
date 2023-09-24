export interface ProjectRFAPI {
  statusCode: number;
  message: string;
  content: {
    project: string[];
  };
}
