-- Active: 1736650920897@@aws-0-ap-southeast-1.pooler.supabase.com@5432@sakila@public

create INDEX idx_firstname
on actor (first_name);

select * from actor where first_name = 'NICK';
select * from actor where first_name like 'N%';


