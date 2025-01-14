-- 1:1 one to one adalah hubungan antar table di mana record yg menyimpan foreign key tidak redundat

select * from customer; -- customer_id
select * from address; -- adress_id



-- 1 customer memiliki 1 address dan 1 address hanya dimiliki 1 customer saja
-- customer menyimpan adress_id

-- customer (id,name, email,active,address_id)
-- 1, 'john', 'john@mail.com'
-- address (id,address,city,state)
-- 1, 'bsd', 'tangsel', 'serpong'

-- 1: many adalah senuah hubungan antara 1 row di dalam 1 table memiliki banyak row data di table lain
-- contoh table authors dengan books
-- contoh table language dengan film
select title, l.name from film f
join language l on l.language_id = f.language_id;

-- many:many adalah hubungan di mana 1 row data bisa dimiliki banyak row di dalam table dan berlaku kebalikannya
-- many:many selalu memiliki link table
-- link table adalah sebuah table yg berisikan lebih dari 1 foreign key milik table lain dan memiliki composite key

select title, c.name from film f
join film_category fc on fc.film_id = f.film_id
join category c on c.category_id = fc.category_id
order by title;
-- 1 film memiliki banyak category dan 1 category dimiliki banyak film