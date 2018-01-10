import * as crypto from "crypto";
import { IResponse } from "./iresponse";

/**
 * Transaction creation response verifier.
 */
export class Verifier {
    private cert: string;

    public constructor(cert: string) {
        this.cert = cert;
    }

    public verify(response: IResponse): boolean {
        const normalizedData = [
            response.transactionId,
            response.timestamp,
        ].join(".");

        const verify = crypto.createVerify("RSA-SHA256");
        verify.update(normalizedData);

        const signature = Buffer.from(response.signature, "base64");

        return verify.verify(this.cert, signature);
    }
}
