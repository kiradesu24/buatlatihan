SELECT country_id, country
FROM country
WHERE country IN ('China', 'Bangladesh', 'India');


SELECT *
FROM actor
WHERE last_name LIKE '%OD%'
ORDER BY last_name, first_name;


ALTER TABLE actor
ADD COLUMN middle_name VARCHAR;

-- Query the table with the desired column order
SELECT first_name, middle_name, last_name, actor_id, last_update
FROM actor;

SELECT * from actor;


SELECT last_name, COUNT(*) AS actor_count
FROM actor
GROUP BY last_name
HAVING COUNT(*) >= 2
ORDER BY actor_count DESC, last_name;


SELECT s.first_name, s.last_name, a.address
FROM staff s
JOIN address a ON s.address_id = a.address_id;


SELECT COUNT(*) AS total_copies
FROM inventory i
JOIN film f ON i.film_id = f.film_id
WHERE f.title = 'Hunchback Impossible';



SELECT f.title, COUNT(r.rental_id) AS rental_count
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
GROUP BY f.title
ORDER BY rental_count DESC;



SELECT s.store_id, ci.city, co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;



SELECT a.first_name, a.last_name
FROM actor a
WHERE a.actor_id IN (
    SELECT fa.actor_id
    FROM film_actor fa
    JOIN film f ON fa.film_id = f.film_id
    WHERE f.title = 'Alone Trip'
);




ALTER TABLE actor
DROP COLUMN middle_name;
