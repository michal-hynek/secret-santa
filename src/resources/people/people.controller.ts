import { RequestHandler } from 'express';

import { db } from '../../server';
import * as peopleDao from '../../db/people/peopleDao';

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
 *                      "$ref": "#/components/schemas/NewPerson"
 *      responses:
 *        '201':
 *          description: Exchange list
 *          content:
 *              application/json:
 *                  schema:
 *                      "$ref": "#/components/schemas/Person"
 */
export const addPerson: RequestHandler = async (req, res, next) => {
    try {
        const response = await peopleDao.addPerson(req.body.firstName, req.body.lastName, db);
        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 *
 * /people:
 *  get:
 *      summary: Returns all people in the database
 *      responses:
 *        '200':
 *          description: People in the database
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          "$ref": "#/components/schemas/Person"
 */
export const getPeople: RequestHandler = async (_req, res, next) => {
    try {
        const people = await peopleDao.getPeople(db);
        res.status(200).json(people);
    } catch (error) {
        next(error);
    }
};
