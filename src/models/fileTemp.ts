import { FileTempDTO } from "../entities/fileTemp";

export class FileTemp {
    private props: FileTempDTO;

    constructor(props: FileTempDTO) {
        this.props = props;
    }   
    getProps(): FileTempDTO {
        return this.props;
    }
}
