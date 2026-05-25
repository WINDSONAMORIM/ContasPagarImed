export class Cnds {
  private type: string;
  private validity: Date | null;
  private title: string;
  private status: string;

  constructor(props: {
    type: string;
    validity: Date | null;
    title: string;
    status: string;
  }) {
    this.type = props.type;
    this.validity = props.validity;
    this.title = props.title;
    this.status = props.status;
  }
  getProps() {
    return {
      type: this.type,
      validity: this.validity,
      title: this.title,
      status: this.status,
    };
  }
}