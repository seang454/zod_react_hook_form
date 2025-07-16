import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";
import { faker } from "@faker-js/faker";

const statuses = ["pending", "processing", "success", "failed"] as const;

async function getData(): Promise<Payment[]> {
  const data: Payment[] = Array.from({ length: 20 }, () => ({
    id: faker.string.numeric(),
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
  return data;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="w-[80%] m-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
