import {FieldMapper} from "../src/fieldmaper";

test("Remap request", () => {
    const requestData = {
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

    const mapper = new FieldMapper({
        serviceId: "service_id",
        returnUrl: "return_url",
        resultUrl: "result_url",
        firstName: "first_name",
        lastName: "last_name",
    });

    const remappedRequest = mapper.remapRequest(requestData);

    expect(remappedRequest.hasOwnProperty("serviceId")).toBeFalsy();
    expect(remappedRequest.hasOwnProperty("service_id")).toBeTruthy();
    expect(remappedRequest["service_id"]).toBe("S1");

    expect(remappedRequest.hasOwnProperty("returnUrl")).toBeFalsy();
    expect(remappedRequest.hasOwnProperty("return_url")).toBeTruthy();
    expect(remappedRequest["return_url"]).toBe("return-url");

    expect(remappedRequest.hasOwnProperty("resultUrl")).toBeFalsy();
    expect(remappedRequest.hasOwnProperty("result_url")).toBeTruthy();
    expect(remappedRequest["result_url"]).toBe("result-url");

    expect(remappedRequest.hasOwnProperty("firstName")).toBeFalsy();
    expect(remappedRequest.hasOwnProperty("first_name")).toBeTruthy();
    expect(remappedRequest["first_name"]).toBe("First-Name");

    expect(remappedRequest.hasOwnProperty("lastName")).toBeFalsy();
    expect(remappedRequest.hasOwnProperty("last_name")).toBeTruthy();
    expect(remappedRequest["last_name"]).toBe("Last-Name");

    expect(remappedRequest.hasOwnProperty("amount")).toBeTruthy();
    expect(remappedRequest["amount"]).toBe(123);
});
