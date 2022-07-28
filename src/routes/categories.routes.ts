import {  Router } from 'express';

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();


categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadExists = categoriesRepository.findByName(name);

    if(categoryAlreadExists) {
        return response.status(400).json({error: "Rildo, revisar javascript: find, list, e contructor"})
    }
    
    categoriesRepository.create({ name, description });
    
    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
   const all = categoriesRepository.list();

   return response.json(all);
});

export { categoriesRoutes };