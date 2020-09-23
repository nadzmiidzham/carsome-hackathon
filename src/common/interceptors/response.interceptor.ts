import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

/**
 * format the general response to follow the guideline
 * https://carsome.atlassian.net/wiki/spaces/TECH/pages/126714250/Guideline#Response
 */
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next
      .handle()
      .pipe(
        map(data => ({ success: true, data: data ? data : null, error: null })),
      );
  }
}
