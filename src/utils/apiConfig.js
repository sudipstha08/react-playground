function getApiEndPoints() {
    let endPoint = null;

    switch (process.env.NODE_ENV) {
        case 'development':
            endPoint = {
                baseUrl: 'http://localhost:8000/api/v1',
                siteUrl: 'http://localhost:8000',
                base: "/"
            }
            break;
        case 'production':
            endPoint = {
                baseUrl: 'http://nascent.com/api/v1',
                siteUrl: 'http://localhost:8000',
                base: "/"
            }
            break;

        default:
            endPoint = {
                baseUrl: 'http://localhost:8000/api/v1',
                siteUrl: 'http://localhost:8000',
                base: "/"
            }

    }
    return endPoint;
}

export const apiEndPoints = getApiEndPoints();