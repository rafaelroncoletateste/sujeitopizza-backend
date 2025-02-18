import prismaClient from "../../prisma";

export class ListOrdersService {
  async execute() {
    const orders = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        created_at: "desc", // Ordenar por e exibir de forma decrescente
      },
    });

    return orders;
  }
}
