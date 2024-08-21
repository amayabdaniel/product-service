const ProductUseCases = require('../../../application/use_cases/ProductUseCases');
const productRepository = require('../../database/repositories/ProductRepository');

class ProductController {
    constructor() {
        this.productUseCases = new ProductUseCases(productRepository);
    }

    async create(req, res) {
        try {
            const product = await this.productUseCases.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getById(req, res) {
        try {
            const product = await this.productUseCases.getProductById(req.params.id);
            res.json(product);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const products = await this.productUseCases.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const product = await this.productUseCases.updateProduct(req.params.id, req.body);
            res.json(product);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            await this.productUseCases.deleteProduct(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new ProductController();
