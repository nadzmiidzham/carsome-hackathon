export abstract class QueryFilter {
    constructor(protected queryParams) {}

    get keys() {
        return Object.keys(this.queryParams);
    }

    getValue(key) {
        return this.queryParams[key] || null;
    }

    toQuery() {
        return this.keys
            .filter(key => this[key])
            .map(key => this[key](this.getValue(key)))
            .reduce(
                (current, accumulated) => Object.assign(accumulated, current),
                {},
            );
    }
}