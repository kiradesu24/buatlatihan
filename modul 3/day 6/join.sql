-- Active: 1736650920897@@aws-0-ap-southeast-1.pooler.supabase.com@5432@sakila@public
select * from customer;
select * from address;
select first_name, last_name, address from customer c
JOIN address a on a.address_id = c.address_id
where c.active = 1;

select first_name, last_name, address from customer c
JOIN address a on a.address_id = c.address_id and c.active = 1;



-- inner join adalah menggabungkan antar table di mana masing2 table memiliki value yg match


select c.first_name, c.last_name, a.first_name, a.last_name from customer c
left join actor a on a.last_name = c.last_name;
--munculkan semua customer dan actor yg memiliki firstname yg sama dengan customer

select c.customer_id, a.actor_id from customer c
left join actor a on a.first_name = c.first_name;
--munculkan customer dan actor yg firstnya sama

-- customer sebagai sumber data
-- actor sebagai data tambahan
-- join -> sumber data berada di sebelah kiri
-- left join artinya menampilkan data yg bersinggungan dan seluruh data milik sumber data.
-- right join menampilkan seluruh data tambahan dan data yg bersinggungan
-- cross join menampilkan 1 data dari sumber data akan memiliki seluruh data dari data tambahan
-- full join menampilkan seluruh data di sumber data dan seluruh data di data tambahan


select * from customer  
cross join actor
where customer_id = 1;