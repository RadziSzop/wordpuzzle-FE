export interface GetGameResponse {
  data: {
    words: string[];
    letters: string[];
  };
}
export interface GetDefinitions {
  success: true;
  data: string[];
}
export interface GetDefinitionsError {
  success: false;
  message: string;
}
