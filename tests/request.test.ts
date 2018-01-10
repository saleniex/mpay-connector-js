import { Request } from "../src/request";

test("Request construct", () => {
    const request = new Request({
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
    });

    const requestData = request.unsignedData();
    expect(requestData.serviceId).toBe("S1");
    expect(requestData.amount).toBe(123);
    expect(requestData.currency).toBe("EUR");
    expect(requestData.summary).toBe("Summary");
    expect(requestData.returnUrl).toBe("return-url");
    expect(requestData.resultUrl).toBe("result-url");
    expect(requestData.firstName).toBe("First-Name");
    expect(requestData.lastName).toBe("Last-Name");
    expect(requestData.email).toBe("info@mobilly.lv");
    expect(requestData.language).toBe("en");


});
