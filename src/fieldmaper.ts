import { IRequest } from "./irequest";

/**
 * Request field name mapper.
 * Translates one field name to another.
 */
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
