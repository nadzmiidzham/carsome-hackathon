import { HttpException } from "@nestjs/common";

/**
 * Exception wrapper to allow return the format by following the guideline
 * https://carsome.atlassian.net/wiki/spaces/TECH/pages/126714250/Guideline#Error-Response
 */
export class CarsomeException extends HttpException {
    constructor(
        type: string,
        errorCode: number,
        message: string,
    ) {
		super({
            success:false,
            data: null,
            error: {
                type,
                code: errorCode,
                message
            }
        }, 200);
    }
}