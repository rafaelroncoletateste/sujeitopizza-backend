import { Request, Response } from "express";
import { DetailUserService } from "../../services/order/DetailOrderService";

export class DetailOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const detailUserService = new DetailUserService();
    const orders = await detailUserService.execute({ order_id });

    return res.json(orders);
  }
}
