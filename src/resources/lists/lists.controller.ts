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
    // TODO: get the people from the database
    const peopleInDb = [
        { id: 1, firstName: 'Padma', lastName: 'Patil' },
        { id: 2, firstName: 'Parvati', lastName: 'Patil' },
        { id: 3, firstName: 'Dean', lastName: 'Thomas' },
        { id: 4, firstName: 'Seamus', lastName: 'Finnigan' },
        { id: 5, firstName: 'Ernie', lastName: 'Macmillan' },
    ];

    // TODO: implement random list generation
    const randomList: any[] = [
        { giver: peopleInDb[0], receiver: peopleInDb[3] },
        { giver: peopleInDb[1], receiver: peopleInDb[2] },
        { giver: peopleInDb[2], receiver: peopleInDb[4] },
        { giver: peopleInDb[3], receiver: peopleInDb[0] },
        { giver: peopleInDb[4], receiver: peopleInDb[1] },
    ];

    res.status(200).json(randomList);
};
