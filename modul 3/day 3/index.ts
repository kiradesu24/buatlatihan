// Import required modules
const express = require('express'); 
const fs = require('fs');
const app = express();
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());

// Filepath for the JSON data
const DATA_FILE = './expenses.json';

// Helper function to read data from JSON file
function readData() {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

// Helper function to write data to JSON file
function writeData(data: any) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Routes

// Get expense list
app.get('/expenses', (req: any, res: { json: (arg0: any) => void; }) => {
    const data = readData();
    res.json(data);
});

// Get expense details
app.get('/expenses/:id', (req: { params: { id: any; }; }, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
    const { id } = req.params;
    const data = readData();
    const expense = data.find((item: { id: number; }) => item.id === parseInt(id));
    if (expense) {
        res.json(expense);
    } else {
        res.status(404).json({ message: 'Expense not found' });
    }
});

// Create new expense data
app.post('/expenses', (req: { body: { title: any; nominal: any; type: any; category: any; date: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; id?: any; title?: any; nominal?: any; type?: any; category?: any; date?: any; }): void; new(): any; }; }; }) => {
    const { title, nominal, type, category, date } = req.body;
    if (!title || !nominal || !type || !category || !date) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const data = readData();
    const newExpense = {
        id: data.length ? data[data.length - 1].id + 1 : 1,
        title,
        nominal,
        type,
        category,
        date
    };

    data.push(newExpense);
    writeData(data);
    res.status(201).json(newExpense);
});

// Edit expense data
app.put('/expenses/:id', (req: { params: { id: any; }; body: { title: any; nominal: any; type: any; category: any; date: any; }; }, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
    const { id } = req.params;
    const { title, nominal, type, category, date } = req.body;
    const data = readData();
    const expenseIndex = data.findIndex((item: { id: number; }) => item.id === parseInt(id));

    if (expenseIndex !== -1) {
        data[expenseIndex] = { ...data[expenseIndex], title, nominal, type, category, date };
        writeData(data);
        res.json(data[expenseIndex]);
    } else {
        res.status(404).json({ message: 'Expense not found' });
    }
});

// Delete expense data
app.delete('/expenses/:id', (req: { params: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; send: { (): void; new(): any; }; }; }) => {
    const { id } = req.params;
    const data = readData();
    const newData = data.filter((item: { id: number; }) => item.id !== parseInt(id));

    if (newData.length === data.length) {
        return res.status(404).json({ message: 'Expense not found' });
    }

    writeData(newData);
    res.status(204).send();
});

// Get total expense by date range
app.get('/expenses/total/date', (req: { query: { start: any; end: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; }; json: (arg0: { total: any; }) => void; }) => {
    const { start, end } = req.query;
    if (!start || !end) {
        return res.status(400).json({ message: 'Start and end dates are required' });
    }

    const data = readData();
    const total = data
        .filter((item: { date: string | number | Date; }) => new Date(item.date) >= new Date(start) && new Date(item.date) <= new Date(end))
        .reduce((sum: any, item: { type: string; nominal: any; }) => sum + (item.type === 'expense' ? item.nominal : 0), 0);

    res.json({ total });
});

// Get total expense by category
app.get('/expenses/total/category', (req: { query: { category: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; }; json: (arg0: { total: any; }) => void; }) => {
    const { category } = req.query;
    if (!category) {
        return res.status(400).json({ message: 'Category is required' });
    }

    const data = readData();
    const total = data
        .filter((item: { category: any; type: string; }) => item.category === category && item.type === 'expense')
        .reduce((sum: any, item: { nominal: any; }) => sum + item.nominal, 0);

    res.json({ total });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
