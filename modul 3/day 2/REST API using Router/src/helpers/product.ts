import { readFileSync, writeFileSync } from "fs";
import { IProduct } from "../interfaces/product.interface";

export const getData = () => {
    const data = JSON.parse(readFileSync(__dirname + "/../../db.json", "utf8"));
    return data as { products: IProduct[] };
};

export const addProduct = (newData: IProduct) => {
    const data = getData();

    data.products.push(newData);
    writeFileSync(__dirname + "/../../db.json", JSON.stringify(data));

};