-- 1 function menciptakan/insert 2 table. 
        -- 1 data transaction
        -- bbrp data transaction_detail


-- transaction (id,order_number,date,user_id)
-- transaction_detail (product_id,qty, transaction_id)
BEGIN;

with inserted as (
insert into actor (first_name,last_name) VALUES('testing','new') returning  actor_id)

insert into film_actor (film_id,actor_id) VALUES(5, (select actor_id from inserted));
COMMIT;
END;

BEGIN;
TRUNCATE film_actor;
ROLLBACK;
END;

select * from film_actor;
select * from actor order by actor_id DESC limit 1;
-- 
-- select * from actor order by actor_id DESC limit 1;

-- COMMIT;