import { Router } from "express";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

const router = Router();

// === ROTAS USER ===
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

// === ROTAS CATEGORY ===
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

export { router };
