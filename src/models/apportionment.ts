import { ApportionmentDTO } from "../entities/apportionment";


export class Apportionment {
  private props: ApportionmentDTO;

  constructor(props: ApportionmentDTO) {
    this.props = props;
  }
    getProps(): ApportionmentDTO {
        return this.props;
    }
}
