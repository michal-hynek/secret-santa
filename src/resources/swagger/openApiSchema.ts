/**
 * @swagger
 *   components:
 *      schemas:
 *        NewPerson:
 *          type: object
 *          properties:
 *              firstName:
 *                  description: First Name
 *                  type: string
 *              lastName:
 *                  description: Last Name
 *                  type: string
 *          required:
 *              - firstName
 *              - lastName
 *
 *        Person:
 *           allOf:
 *             - $ref: "#/components/schemas/NewPerson"
 *             - type: object
 *               properties:
 *                  id:
 *                    type: number
 *               required:
 *                  - id
 *
 *        ExchangePair:
 *          type: object
 *          properties:
 *              giver:
 *                  description: Person buying the gift
 *                  "$ref": "#/components/schemas/Person"
 *              receiver:
 *                  description: Person getting the gift
 *                  "$ref": "#/components/schemas/Person"
 *
 *        ExchangeList:
 *          type: array
 *          items:
 *              "$ref": "#/components/schemas/ExchangePair"
 */

/**
 * @swagger
 *  definitions:
 *      GenericErrorResponse:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: number
 *              errors:
 *                  type: array
 *                  items:
 *                      type: string
 */
