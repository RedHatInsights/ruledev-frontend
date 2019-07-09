const DEFAULT_PREFIX = 'api/rule-nomination/v1';

export default (data) => {
    return fetch(`/${DEFAULT_PREFIX}/nominations`, {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(r => {
        if (r.ok) {
            return r.json();
        }

        throw new Error(`Unexpected response code ${r.status}`);
    });
};
