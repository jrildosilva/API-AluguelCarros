import { ISpecificationsRepository } from "../repositories/ISpecificatiosRepository";

interface IRequest {
   name: string;
   description: string;
}


class CreateSpecificationService {
   constructor(private specificationsRepository: ISpecificationsRepository) {}
   exeucte({ name, description }: IRequest): void {
     const specificationAlreadyExists = this.specificationsRepository.findByName(name) 

     if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
     }

     this.specificationsRepository.create({
       name, 
       description,
     })
   }
}

export { CreateSpecificationService };
