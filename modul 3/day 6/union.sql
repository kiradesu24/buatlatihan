(select first_name, last_name, 'actor' source_data from actor limit 5)
UNION
select 'rudy' first_name, 'tabuti' last_name, 'select' source_data
union ALL
select 'rudy' first_name, 'tabuti' last_name, 'select' source_data;

-- menggabungkan 2 atau lebih hasil query
-- union, apabila ada baris data yg sama akan di-distinc
-- union all, menampilkan seluruh data walau ada baris data yg sama