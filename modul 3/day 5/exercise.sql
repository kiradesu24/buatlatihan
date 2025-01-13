-- Active: 1736771642298@@aws-0-ap-southeast-1.pooler.supabase.com@5432@purwadhika_student@student
CREATE TABLE student(  
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    last_name VARCHAR(20),
    first_name VARCHAR(20),
    adress VARCHAR(50),
    city VARCHAR(20)
);

ALTER Table student ADD COLUMN email VARCHAR(50);

ALTER Table student
    ADD COLUMN gender VARCHAR(50),
    ADD COLUMN batch_code VARCHAR(50),
    ADD COLUMN phone_number VARCHAR(50),
    ADD COLUMN alternative_phone_number VARCHAR(50);

ALTER TABLE student RENAME COLUMN alternative_phone_number TO description;

ALTER TABLE student ALTER COLUMN description TYPE VARCHAR(50);

ALTER TABLE student DROP COLUMN gender;

