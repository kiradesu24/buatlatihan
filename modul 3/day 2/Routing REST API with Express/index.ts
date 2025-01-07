import express, { Application, NextFunction, Request, Response } from "express";

const PORT = 8000;

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.post("/", (req: Request, res: Response) => {
    res.send("ini post");
});

app.patch("/", (req: Request, res: Response) => {
    res.send("ini patch");
});

app.put("/", (req: Request, res: Response) => {
    res.send("ini put");
});

app.delete("/", (req: Request, res: Response) => {
    res.send("ini delete");
});


//menghandle route yg ada huruf A
app.get(/a/, (req: Request, res: Response) => {
    res.send("a/");
});

app.patch(/.*fly/, (req: Request, res: Response) => {
    res.send("semua yg diakhiri fly");
});


//Request URL = localhost:8000/users/1/books/2
//req.params = {userId: 1, books: 2}
app.get("/users/:userId/books/:bookId", (req: Request, res: Response) => {
    res.send("rew.params");
});


app.get("/example/a", (req: Request, res: Response) => {
    res.send("Hello from A");
});

app.get(
    "/example/b", 
    (req: Request, res: Response, next: NextFunction) => {
        console.log("the response will be sent by the function ...");
        next(); //middleware selesai, silahkan lanjut ke callback berikutnya
    },
    (req: Request, res: Response) => {
    res.send("Hello from B");
});


const validateUser = (req: Request, res: Response, next: NextFunction) => {
       const { email, name } = req.body;
       if (!email || !name)
        res.status(400).send({
            message: "email dan name wajib diisi"
    });
    else next();
    };

app.post("/users", validateUser, (req: Request, res: Response) => {
    res.send("new user has been added");
});
    
app.patch("/users/:userId", validateUser, (req: Request, res: Response) => {
    res.send("new user has been updated");
});

app.get("/redirect", validateUser, (req: Request, res: Response) => {
    res.redirect("https://google.com"); // redirect ke google.com
});

app.listen(PORT, () => console.log("API is running on PORT", PORT));