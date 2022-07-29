import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}
 /**
  * [x] - Definir o tipo de retorno
  * [x] - Alterar o retorno de erro
  * [x] - Acessar o repositório
  */

class CreateCategoryService {
    constructor( private categoriesRepository: ICategoriesRepository) {

    }

    execute({ description, name}: IRequest): void {

        const categoryAlreadExists = this.categoriesRepository.findByName(name);

        if(categoryAlreadExists) {
          throw new Error("Category Already exists!")
        }
        
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
