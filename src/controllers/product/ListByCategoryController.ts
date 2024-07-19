import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

export class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.params.category_id;

    const listByCategoryService = new ListByCategoryService();
    const products = await listByCategoryService.execute({ category_id });

    return res.json(products);
  }
}
