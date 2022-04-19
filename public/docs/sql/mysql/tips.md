# 插入或更新数据

```sql
INSERT INTO demo_table (a,b,c) VALUES (1,2,3)
ON DUPLICATE KEY UPDATE c=VALUES(c);

REPLACE INTO demo_table (a,b,c) VALUES(1,2,3);
```

# 检视

```sql
SHOW DATABASES;

SHOW TABLES;

DESCRIBE table;

SHOW CREATE TABLE demo_table;

SHOW FIELDS FROM demo_table;

SHOW COLUMNS
FROM demo_table;

SELECT *
FROM information_schema.tables
WHERE table_name LIKE 'test_demo%';

SELECT *
FROM information_schema.columns
WHERE table_schema = 'demo_schema'
AND table_name = 'demo_table';
```

# 语句优先级

```sql
-- DDL 低优先级处理，避免高并发时的死锁情况
UPDATE [LOW_PRIORITY] demo_table
SET col_name1=expr1, col_name2=expr2, ...;
```
