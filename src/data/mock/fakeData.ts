import faker from "faker";

const numberOfShifts = 4;
const numberOfDoctors = 4;

const randomShifts = new Array(numberOfShifts).fill(0).map(() => {
  return {
    id: faker.datatype.uuid(),
    nomePlantao: `Plantão ${faker.name.jobType()}`,
    doctors: new Array(numberOfDoctors).fill(0).map(() => {
      return {
        id: faker.datatype.uuid(),
        nome: `${faker.name.prefix()} ${faker.name.firstName()} ${faker.name.lastName()}`,
        especialidade: faker.name.jobArea(),
        avatar: faker.image.avatar(),
      };
    }),
    startDate: faker.date.recent(),
    endDate: faker.date.soon(),
  };
});

export const shifts = randomShifts;
