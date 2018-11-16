export * from './authController.service';
import { AuthControllerService } from './authController.service';
export * from './categoryController.service';
import { CategoryControllerService } from './categoryController.service';
export * from './productController.service';
import { ProductControllerService } from './productController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [AuthControllerService, CategoryControllerService, ProductControllerService, UserControllerService];
