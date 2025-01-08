import { Request, Response, Router } from "express";
import { addProduct, getData } from "../helpers/product";
import { IProduct } from "../interfaces/product.interface";
const router = Router();

router.get("/", (req: Request, res:Response) => {
    const { products } = getData();
    res.send({
        message: "fetching products",
        data: products,
    });
});

router.get("/:id", (req: Request, res:Response) => {
    const { id } = req.params;
    const { products } = getData();
    const data = products.find((_) => _.id == Number(id));
    res.send({
        message: "fetching product id" + id,
        data,
    });
});

router.post("/", (req: Request, res:Response) => {
addProduct(req.body as IProduct);
res.send({
    message: "new product  has been added"
});
});

export default router;