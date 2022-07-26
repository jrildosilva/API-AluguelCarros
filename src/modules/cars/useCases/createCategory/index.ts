import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";



const categoriesRepository = CategoriesRepository.getInstance();

const createcategoryUsecase = new CreateCategoryUseCase
(categoriesRepository);

const createCategoryController = new CreateCategoryController( 
    createcategoryUsecase);


export { createCategoryController };