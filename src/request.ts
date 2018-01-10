import { FieldMapper } from "./fieldmaper";
import { IRequest } from "./irequest";
import { Signer } from "./signer";

/**
 * Transaction create request class.
 */
export class Request {
    private data: IRequest;

    public constructor(data: IRequest) {
        this.validateAndSet(data);
    }

    public signedData(signer: Signer): IRequest {
        return signer.signedData(this.data);
    }

    public signedMappedData(signer: Signer, mapper: FieldMapper): object {
        const signedData = this.signedData(signer);

        return mapper.remapRequest(signedData);
    }

    public unsignedData(): IRequest {
        return this.data;
    }

    private validateAndSet(data: IRequest): void {
        this.data = data;
    }
}
