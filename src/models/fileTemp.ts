import { FileTempDTO } from "../entities/fileTemp";

export class FilesTemp {
  private nomeDoArquivo: string;
  private hashArquivo: string;
  private extensaoArquivo: string;
  private cnpjInstituicao: string;
  private parceriaId: number;

  constructor(props: FileTempDTO) {
    this.nomeDoArquivo = props.nomeDoArquivo;
    this.hashArquivo = props.hashArquivo;
    this.extensaoArquivo = props.extensaoArquivo;
    this.cnpjInstituicao = props.cnpjInstituicao;
    this.parceriaId = props.parceriaId;
  }

  getProps(): FileTempDTO {
    return {
      nomeDoArquivo: this.nomeDoArquivo,
      hashArquivo: this.hashArquivo,
      extensaoArquivo: this.extensaoArquivo,
      cnpjInstituicao: this.cnpjInstituicao,
      parceriaId: this.parceriaId,
    };
  }
}
