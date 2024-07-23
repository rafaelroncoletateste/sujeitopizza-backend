import { Request, Response } from "express";
import { DeatilUserService } from "../../services/order/DeatilOrderService";

export class DetailOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const detailUserService = new DeatilUserService();
    const orders = await detailUserService.execute({ order_id });

    return res.json(orders);
  }
}
