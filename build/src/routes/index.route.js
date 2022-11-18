"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = require("express");
const auth_route_1 = require("./admin/auth.route");
const category_route_1 = require("./admin/category.route");
exports.AppRouter = (0, express_1.Router)();
exports.AppRouter.use("/auth", auth_route_1.AuthRouter);
exports.AppRouter.use("/category", category_route_1.categoryRouter);
