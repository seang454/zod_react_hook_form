import { faker } from "@faker-js/faker";
import { Payment } from "./columns";

const statuses = ["pending", "processing", "success", "failed"] as const;

export const data: Payment[] = Array.from({ length: 20 }, () => ({
  id: faker.string.alphanumeric(8),
  amount: parseFloat(
    faker.finance.amount({
      min: 10,
      max: 1000,
      dec: 2,
    })
  ),
  status: faker.helpers.arrayElement(statuses),
  email: faker.internet.email(),
}));
