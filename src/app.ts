import { AxiosError, AxiosResponse } from "axios";
import * as dotenv from "dotenv";
import * as fs from "fs";
import { Connector } from "./connector";
import { Request } from "./request";
import { Signer } from "./signer";
import { Verifier } from "./verifier";

dotenv.config();

const request = new Request({
    serviceId: "1",
    amount: 123,
    currency: "EUR",
    summary: "Summary",
    returnUrl: "https://mysite.net",
    resultUrl: "https://mysite.net",
    firstName: "First-Name",
    lastName: "Last-Name",
    email: "info@mobilly.lv",
    language: "en",
});

const privateKey = fs.readFileSync(process.env.KEY_FILE);
const signer = new Signer(process.env.MPAY_USER, privateKey.toString(), process.env.KEY_SECRET);
const fieldMap = {
    serviceId: "service_id",
    returnUrl: "return_url",
    resultUrl: "result_url",
    firstName: "first_name",
    lastName: "last_name",
};

const connector = new Connector(`${process.env.ENDPOINT}/transaction`, fieldMap);
connector
    .send(request, signer)
    .then((result : AxiosResponse) => {
        const cert = fs.readFileSync(process.env.CERT_FILE);
        const verifier = new Verifier(cert.toString());
        const response = {
            transactionId: result.data.transaction_id,
            timestamp: result.data.timestamp,
            signature: result.data.signature,
        };

        if (verifier.verify(response)) {
            console.log(`Redirect to "${process.env.ENDPOINT}?transid=${result.data.transaction_id}".`);
            process.exit();
        }

        console.log("Invalid response. Cannot verify.");
    })
    .catch((error : AxiosError) => {
        console.log(error.response.statusText);
        process.exit(1);
    });
