import { IRequest } from "./irequest";

export class FieldMapper {
    private map: object;

    public constructor(map: object) {
        this.map = map;
    }

    public remapRequest(request: IRequest): object {
        const remappedRequest = {};
        for (const prop of Object.keys(request)) {
            if (this.map.hasOwnProperty(prop)) {
                remappedRequest[this.map[prop]] = request[prop];
                continue;
            }
            remappedRequest[prop] = request[prop];
        }

        return remappedRequest;
    }

}
