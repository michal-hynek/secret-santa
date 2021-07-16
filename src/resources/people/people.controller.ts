import { RequestHandler } from 'express';

/**
 * @swagger
 *
 * /people:
 *  post:
 *      summary: Add a person
 *      description: Add a person to the Secret Santa exchange
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      "$ref": "#/components/schemas/Person"
 *      responses:
 *        '201':
 *          description: Exchange list
 *          content:
 *              application/json:
 *                  schema:
 *                      "$ref": "#/components/schemas/Person"
 */
export const addPerson: RequestHandler = async (_req, res) => {
    // TODO: implementation
    res.status(201).end();
};
