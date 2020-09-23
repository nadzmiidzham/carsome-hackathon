import { HttpException } from "@nestjs/common";
import collect from 'collect.js';

/**
 * Will handle the transformation of the original validation format to follow the API guideline
 * https://carsome.atlassian.net/wiki/spaces/TECH/pages/146800710/Error+Response
 */
export class ValidationException extends HttpException {
    constructor(errorObjects) {

        const errors = errorObjects.reduce( (msg,err) => {
            return  `${msg}${err.children && err.children.length > 0
                ? Object.values(collect(err.children).pluck('constraints').flatten()).join(" ")
                : Object.values(err.constraints)}, `;
        },"")


		super({
            success:false,
            data: null,
            error: {
                type: 'validation',
                code: 100,
                message: `Missing fields : ${errors}`
            }
        }, 200);
    }
}
