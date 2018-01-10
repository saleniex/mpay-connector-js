import Axios from "axios";
import { FieldMapper } from "./fieldmaper";
import { Request } from "./request";
import { Signer } from "./signer";

/**
 * Connector to Mpay.
 */
export class Connector {
    private endpoint: string;
    private fieldMap: object;

    public constructor(endpoint: string, fieldMap: object = {}) {
        this.endpoint = endpoint;
        this.fieldMap = fieldMap;
    }

    public send(request: Request, signer: Signer): Promise<object> {
        return Axios.post(
            this.endpoint,
            request.signedMappedData(signer, new FieldMapper(this.fieldMap)));
    }
}
