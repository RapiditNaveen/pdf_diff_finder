import { PdfDifferences } from "./pdf-differences";

export interface PdfDiffResponse {
  textInOriginal:string;
  textInTarget:string;
  differences:PdfDifferences[]
}
