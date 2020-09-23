import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common";
import { CarsomeException } from "../exceptions/carsome.exception";
import { BaseExceptionFilter } from "@nestjs/core";
import { ValidationException } from "../exceptions/validation.exception";

/**
 * This class is to format the exception to the response as expected.
 */
@Catch()
export class GeneralExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {

        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        // return the status according to what being set in the exception
        response.status(exception.getStatus())

        if (exception instanceof CarsomeException || exception instanceof ValidationException) {
            return response.json(exception.getResponse())
        }



        // lets return the framework itself exception for the time being, with our own wrapper
        response
            .json({
                success: false,
                data: null,
                error: exception.getResponse()
            })
    }

}