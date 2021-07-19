import { RequestHandler } from 'express';

/**
 * @swagger
 *
 * /lists/random:
 *  get:
 *      summary: Get a randomly generated exchange list
 *      description: Generates a random exchange lists
 *      responses:
 *        '200':
 *          description: Exchange list
 *          content:
 *              application/json:
 *                  schema:
 *                      "$ref": "#/components/schemas/ExchangeList"
 */
export const getList: RequestHandler = async (_req, res) => {
    // TODO: implementation
    res.status(200).json([]);
};
