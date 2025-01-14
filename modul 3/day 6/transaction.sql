
-- 1 function menciptakan/insert 2 table
        -- 1 data transaction
        -- beberapa data transaction_detail

-- transaction (id,order_number,data, user_id)
-- transaction_detail (product_id,qty,transaction_id)

select * from actor order by actor_id DESC limit 1;

begin;
insert into actor (first_name,last_name) VALUES ('jordan', 's');
ROLLBACK;
