-- tampilkan film yg durasinya lebih lama dari durasi rata2 film
select film_id,title,"length" from film
where "length" > (
    select avg("length") from film
);


select (select first_name from customer c where c.address_id = a.address_id), a.address from address a;
