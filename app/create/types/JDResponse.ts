export type JDScoresSet = {
    jobId: string;
    jobUrl: string;
    score: number;
  };

  
export type SearchForJDResponse = {
  JDScoresSet: JDScoresSet[];
  ExceptionMsg: string; 
};
  