import { AccountsPayableResumeDTO } from "../entities/accountsPayable";

export interface ResponseAPI {
  statusCode: number;
  success: boolean;
  message: string;
  data: any;
}

export interface ResponsePreviewAccount {
  statusCode: number;
  success: boolean;
  message: string;
  data: AccountsPayableResumeDTO;
};