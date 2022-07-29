import { CategoriesRepository } from "../repositories/CategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}
 /**
  * [] - Definir o tipo de retorno
  * [x] - Alterar o retorno de erro
  * [] - Acessar o repositório
  * [] - Retornar algo
  */

class CreateCategoryService {
    constructor( private categoriesRepository: CategoriesRepository) {

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
