import { Verifier } from "../dist/verifier";

test("Verify test", () => {
    const cert = "-----BEGIN PUBLIC KEY-----\n" +
        "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAzZOtZQTKkEX9+RhF+MW4\n" +
        "0PXD/11+AtFbC0VZyHXf6h3ubcjMByMJksGqAiEtapb1rbvb0qV6v0hdZe4ztq+y\n" +
        "CbF1fdFdS0gOee5dDT+ouq18mHmWicR1t4Zcf2qwxe3NeibeFnf26G0TLv2CkTwI\n" +
        "2xrAS5EPttO5OoYhRWbpiCGLWMNQOVfbJZYjxnZ4jw949HriXb/m5wFSL69r+0ak\n" +
        "ynts3aiYr8oR3aBiQy66pWCnOt+t+l2w0V7/b0B2Tn4uW2P1UBggzj0rKMdAHt0f\n" +
        "c9mxamGxstdQIPPtvuH4ixP/fiB3IIi95iKdmODwTprTJSy92N8EorFLPC/Is2i6\n" +
        "xV2GjT0GqRGsgTRGXb6cSFX3LzA/i8335zmW3++AMv37LeLLyl0hLKjs5pfhM5df\n" +
        "4PaYrQCoyoszLQQ8VWsUqw1qfFVR7N9FFmsBRXNQuFazTagxW2qo2CRs8jxXN7EA\n" +
        "2caURsn++Hz+rlWHXTI5PIIrYeVKtcMA7r/4R6BnsfmTwM6MegGZuueIDt+FxkYK\n" +
        "Eqsk+/cs+IUESJziVyXcgSjv6WLYAUOlAnladjNyUi5ngzJzG9MPHr27DHHoDphR\n" +
        "9Mf7gKzXXaDNIyJOXdtLkJV1HPATfd7Hmba7O3nKWefUqUhGIOrAumDn+j6pyHsO\n" +
        "AtZhaWYjxwAkHJUiPt4y0rECAwEAAQ==\n" +
        "-----END PUBLIC KEY-----";

    const verifier = new Verifier(cert);
    const response = {
        transactionId: "61cedd701502f48ff24dcdeeabdea75dc8f927476558b44194",
        timestamp: "2018-01-05T12:33:50+02:00",
        signature: "uXYJuKksc1FiUtxU2pm3Y9RmoiBpP13oxH5IlQHSbtBKVdO7oFeGAdb9dtjXAiesiz3Zrgpl1Hj71rWDiccK8cylJMQ12mxkl" +
        "5nEpNo10/+Ym7eAferUUzn5hf+R4hKUgW4ztwgex94yHEfW08CzQRXX0WHK/kBKgVTNMz5GZqulJ/bN/c1MaUG4GBvOj2lKR5BNy0pPGawXd" +
        "zjTBKWDv2MQegSEECZDrPdr/Mifx3c9HBjTSPbW1W8RNcLhyVGP0O5n6cCqn+O5DaOC0Wpwp83odzx9OnGOBqh7p4eFndMNKX2tf07bFj2Be" +
        "HgYWyaUkKJeXrK1uJd2RItd77TYlveWNbxeYgC3HS86+m8opriSL2hoJ+kqD8eqljPRAP9Rf8mz+bVbFRWNnnr7RkPInYuNtx0v0q4ef15G4" +
        "hRpo9KhtUjvQBh2Gd4HykaCmXsPN5rp/FGhpAY6kp2bUAWvRiCtMiMcS4R1MWlDmM0NjyZRTgjsp+aZHkA56BbmQcWFTRT295HFBFKMtSG5I" +
        "y626X6L+8O08Hceoo14vGuwp9V6M/73M5/665GyEiRr18oFLAfJXrJasvcV3Ht9LTvFxaBywkMbF+PJWmI81Pni/kwnR6UWSNTSvE7YUQ1Po" +
        "SAkj+yHN2y4dUnu7GxDbFoLrcbdJryJ1ulXSRYled2q4ck=",
    };
    expect(verifier.verify(response)).toBeTruthy();
});
