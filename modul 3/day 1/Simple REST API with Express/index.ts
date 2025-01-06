import express, { Application, Request, Response } from 'express';
import { products } from "./db.json"

const app: Application = express ();
const PORT = 8000

app.get("/", (req: Request, res: Response) => {
    res.status(200).send({
        message: "Welcome to my API",
});
});

// app.get("/products", (req: Request, res: Response) => {
//     res.status(200).send({
//         message: "fetcing products",
//         data: products,
//     });
// });

app.get("/products/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const data = products.find((_) => _.id == Number(id));
    if(!data) 
        res.status(404).send({
        message: "product not found",
    })
    else
    res.status(200).send({
        message: "fetcing single products",
        data,
    });
});


app.get("/products", (req: Request, res: Response) => {
    const { product_name } = req.query
    let data = [...products];
    if (product_name) {
        data = data.filter((_) =>
            _.product_name.toLowerCase().includes(String(product_name).toLowerCase())
        );
    }
    res.status(200).send({
        message: "fetching products",
        data,
    }); 
});

app.delete("products/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const idx = products.findIndex((_) => _.id == Number(id));
    if (idx == -1)
        res.status(404).send({
           message: "product not found",
        });
    else {
        products.splice(idx, 1);
        res.status(200).send({
            message: `product id ${id} has been deleted`
        });
    }
})

app.listen(PORT, () => {
    console.log("api is running on port", PORT);
});

