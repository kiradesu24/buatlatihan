-- count
select c.name, count(fc.category_id) from category c
join film_category fc on fc.category_id = c.category_id
GROUP BY fc.category_id, c.name
ORDER BY c.name;

-- sum
select sum(film.length)/60 as hours from film;

-- avg
select avg(film.length) as hours from film;

-- min
select min(film.length) as hours from film;

-- max
select max(film.length) as hours from film;