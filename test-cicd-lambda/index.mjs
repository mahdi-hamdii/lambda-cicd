import { faker } from '@faker-js/faker';
export const handler = async (event) => {
    // TODO implement
    const randomName = faker.person.fullName(); // Rowan Nikolaus
    const response = {
      statusCode: 200,
      body: JSON.stringify(`Hello  ${randomName} from Lambda!`),
    };
    return response;
  };