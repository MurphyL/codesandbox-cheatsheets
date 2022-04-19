# 分区操作

```sql
show partitions demo_schema.test_table;

alter table demo_schema.test_table
drop if exists partition (dt is not null);

show files in demo_schema.test_table;
show table stats demo_schema.test_table;
```
