import { Router } from "express";
import { AdminRouter } from "./admin/admin.route";
import { productRouter } from "./admin/product.route";
import { categoryRouter } from "./admin/category.route";
import { subCategoryRoute } from './admin/subCategory.route';


export const AppRouter: Router = Router();
AppRouter.use("/admin/auth/", AdminRouter);
AppRouter.use("/category", categoryRouter);
AppRouter.use("/sub-category", subCategoryRoute)
AppRouter.use("/Product", productRouter);

