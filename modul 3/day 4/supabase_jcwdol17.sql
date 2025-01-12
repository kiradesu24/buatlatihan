-- Active: 1736650920897@@aws-0-ap-southeast-1.pooler.supabase.com@5432@jcwdol17@public
create Table employees (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(100) NOT NULL,
    salary NUMERIC(10,2) NOT NULL,
    hire_date DATE
); -- buat table employees

drop Table employees; --hapus table

ALTER Table employees ADD COLUMN department VARCHAR(50); --tambah kolom department

INSERT INTO employees (name, salary, hire_date) VALUES('John Doe', 50000, '2023-01-15');

INSERT INTO employees (name, salary, hire_date) VALUES('David', 45000, '2023-01-15'), ('CIndy', 40000, '2023-01-15'); --memasukkan data ke table employees

SELECT * FROM employees; -- read table employees

SELECT name,salary from employees; --read selected column in employees

update employees set salary = 43000 WHERE id =3; --update salary 43000 di mana id = 3

DELETE FROM employees WHERE id = 2; --menghapus data yg memiliki id = 2

INSERT INTO employees (name, salary, hire_date) VALUES('David', 50000, '2023-01-15');

SELECT count (salary) as total, salary FROM employees GROUP BY salary order by salary;
-- mengelompokkan data betrdasarkan gaji dna menghitung baris data yg memiliki gaji yg sama

SELECT count (salary) as total, salary FROM employees GROUP BY salary HAVING count(salary) > 1 ORDER BY salary;
-- memunculkan data yg sudah dikelompokkan. di mana hasil pengelompokkannya diberi kondisi

-- having dama dengan where, where memberikan kondisi terhadap source table
-- sedangkan having memberikan kondisi pada hasil data yg sudah dikelompokkan

select * from employees LIMIT 2 OFFSET 0; -- page 1 datanya dilimit sebanyak 2

select * from employees LIMIT 2 OFFSET 2; -- page 2



