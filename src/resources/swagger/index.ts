import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Sample API',
            description:
                'Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.',
            version: '1.0.0',
        },
        servers: [
            {
                url: '/',
            },
        ],
    },
    apis: ['./**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec };
