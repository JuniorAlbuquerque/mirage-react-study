import faker from "faker";

const numberOfShifts = 5;
const numberOfDoctors = 10;

const randomShifts = new Array(numberOfShifts).fill(0).map(() => {
  return {
    id: faker.datatype.uuid(),
    nomePlantao: `Plantão ${faker.name.jobType()}`,
    doctors: new Array(numberOfDoctors).fill(0).map(() => {
      return {
        id: faker.datatype.uuid(),
        nome: faker.name.findName(),
        especialidade: faker.name.jobArea(),
      };
    }),
    startDate: faker.date.recent(),
    endDate: faker.date.soon(),
  };
});

export const shifts = randomShifts;
