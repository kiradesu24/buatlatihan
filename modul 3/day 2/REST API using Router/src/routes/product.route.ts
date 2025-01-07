import { Request, Response, Router } from "express";
import { addProduct, getData } from "../helpers/product";
const router = Router();

router.get("/", (req: Request, res:Response) => {
    const data = getData();
    res.send({
        message: "fetching products",
        data: products,
    });
});

router.get("/:id", (req: Request, res:Response) => {
    const { id } = req.params;
    const products = getData();
    const data = products.find((_) => _.id == Number(id));
    res.send({
        message: "fetching product id" + id,
        data,
    });
});

router.post("/", (req: Request, res:Response) => {
const products = getData();
const id = products[products.length - 1].id + 1;
const { productName, price, categoryId } = req.body;
const newData = { id, productName, price, categoryId };
addProduct(newData);
res.send({
    message: "new product  has been added"
});
});

export default router;