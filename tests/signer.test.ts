import * as fs from "fs";
import { Signer } from "../src/signer";

test("Sign data normalization", () => {
    const data = {
        serviceId: "S1",
        amount: 123,
        currency: "EUR",
        summary: "Summary",
        returnUrl: "return-url",
        resultUrl: "result-url",
        firstName: "First-Name",
        lastName: "Last-Name",
        email: "info@mobilly.lv",
        language: "en",
    };

    expect(Signer.normalize(data)).toBe("S1.123.EUR.Summary.return-url.result-url.First-Name.Last-Name.info@mobilly.lv.en");
});

test("Signature creation", () => {
    const privateKey = fs.readFileSync("./tests/private.pem").toString();
    const signer = new Signer("", privateKey, "test");
    const data = {
        serviceId: "1",
        amount: 250,
        currency: "EUR",
        summary: "NodeJS test transaction.",
        returnUrl: "https://mydomain.net/return",
        resultUrl: "https://mydomain.net/result",
        firstName: "John",
        lastName: "Doe",
        email: "info@mobilly.lv",
        language: "en",
        timestamp: "2018-01-05T12:33:50+02:00",
        user: "nodetest",
    };

    expect(signer.signature(data)).toBe("BD89f/7RUr0+WJ6+DLB4wxxye1mns9TYc3s41oNmaaTNrcVdaStgWeuBOQArULx7tA" +
        "oPWXiO3IpFPNNIrNXOpxOqzNhSw7trF0gny3pyshCebzsxnF3j4QUr4J70tu/oCJBvIpdHA97KRDOrqWDnkvwh/mgVJNge33iwViCUPVdcy" +
        "4vjwFSBaW7C/QH+I/UTLvfvChOUG9ljlJXmcLhQKFGHikRchCdHy3AZ8GpMMt5+lIavXSiMV9ZnfVU7bRsVuB+dnRq/sQHS0bKkPPTm3sZ7" +
        "cT39EHZoJTVJ/mL83jv1G8PDqs2eqxO2ovnsR0F+RfiEudp6cKS0ZxGcr+kErbfUmguw2GHF1ceb/qHGutRDUmSCO046UVqigco8VJuWiUD" +
        "w3ekZcFwYT3Q6AJatDds7jOPwG6hs8UR63EI55DrOq4umy/V+1aOXM8YQWx6AJ2zNXOAgpVtumdA+Jb4nbpGGR9cdfUKBLskNIrnn+8vzt1" +
        "PZ+Y86jXPNfhUnrR+B4P39FoPbsZtmX0w4MesAXyr1VMYoVPHAma6qrZZvWt9cxRXhS3za3DfWCm4kkzCukmp1Syzyg4eZ5xgTotJMru/Nx" +
        "0QdhzNdH6iqWqobBQ8yDhMhCh1TryrS0AGyOG/Y8uP+GJ50WOvNZ6TMojnlIcqyvi0yS+W7CFfDIPQfXcE=");
});

test("Data signing", () => {
    const privateKey = fs.readFileSync("./tests/private.pem").toString();
    const signer = new Signer("nodetest", privateKey, "test", "2018-01-05T12:33:50+02:00");
    const data = {
        serviceId: "1",
        amount: 250,
        currency: "EUR",
        summary: "NodeJS test transaction.",
        returnUrl: "https://mydomain.net/return",
        resultUrl: "https://mydomain.net/result",
        firstName: "John",
        lastName: "Doe",
        email: "info@mobilly.lv",
        language: "en",
    };
    const signedData = signer.signedData(data);
    expect(signedData.timestamp).toBe("2018-01-05T12:33:50+02:00");
    expect(signedData.signature).not.toBeNull();
});
