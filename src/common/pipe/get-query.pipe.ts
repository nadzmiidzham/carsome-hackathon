import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

export interface QueryPipeInterface {
    select?: any;
    relations?: string[];
    where?: object;
    order?: any;
    skip?: number;
    take?: number;
}

@Injectable()
export class GetQueryPipe<T extends object> implements PipeTransform {
    transform(getQuery: T, metadata: ArgumentMetadata): Partial<QueryPipeInterface> {
        const findOptions: Partial<QueryPipeInterface> = {};

        if ('fields' in getQuery) {
            getQuery['fields'] = getQuery['fields'].replace(' ', '').split(',');
        }

        if ('paginationMeta' in getQuery) {
            getQuery['paginationMeta'] = getQuery['paginationMeta'] === 'true';
        }

        if ('page' in getQuery) {
            getQuery['page'] = Number(getQuery['page']);
        }

        if ('limit' in getQuery) {
            getQuery['limit'] = Number(getQuery['limit']);
        }

        if ('from' in getQuery) {
            const fromDate = getQuery['from'].split('-');
            getQuery['from'] = new Date(fromDate[0], fromDate[1] - 1, fromDate[2]);
        }

        if ('to' in getQuery) {
            const toDate = getQuery['to'].split('-');
            getQuery['to'] = new Date(toDate[0], toDate[1] - 1, toDate[2], 23, 59, 59);
        }

        if ('orderBy' in getQuery) {
        }

        return getQuery;
    }
}
