import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./createcategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";



const categoriesRepository = new CategoriesRepository();
const createcategoryUsecase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController( createcategoryUsecase);


export { createCategoryController };