import * as crypto from "crypto";
import * as moment from "moment";
import { IRequest } from "./irequest";

/**
 * Request signer.
 */
export class Signer {

    private key: string;

    private secret: string;

    private user: string;

    private timestamp: string;

    public constructor(user: string, key: string, secret: string = "", timestamp: string = "") {
        this.user = user;
        this.key = key;
        this.secret = secret;
        this.timestamp = "" === timestamp
            ? moment().format("YYYY-MM-DDTHH:mm:ssZ")
            : timestamp;
    }

    public static normalize(data: IRequest): string {
        let normalizedData: string = "";

        for (const property of Object.keys(data)) {
            normalizedData += ("" === normalizedData ? "" : ".") + data[property];
        }

        return normalizedData;
    }

    public signature(data: IRequest): string {
        const sign = crypto.createSign("RSA-SHA256");
        sign.update(Signer.normalize(data).toString());

        const privateKey = ("" === this.secret)
            ? this.key
            : { key: this.key, passphrase: this.secret };

        return sign.sign(privateKey).toString("base64");
    }

    public signedData(data: IRequest): IRequest {
        const signData = { ... data };

        signData.timestamp = this.timestamp;
        signData.user = this.user;
        signData.signature = this.signature(signData);

        return signData;
    }
}
