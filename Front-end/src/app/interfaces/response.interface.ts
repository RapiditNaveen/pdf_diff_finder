import { PdfDiffResponse } from './pdf-diff-response';

export interface Response {
  status: number;
  message: string;
  data: PdfDiffResponse;
}
