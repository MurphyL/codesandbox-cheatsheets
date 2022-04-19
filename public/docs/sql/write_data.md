```sql
INSERT INTO table1 (field1, field2) VALUES (value1, value2);

UPDATE table1 SET field1=new_value1 WHERE condition;

UPDATE table1, table2
SET field1=new_value1, field2=new_value2, ...
WHERE table1.id1 = table2.id2 AND condition;
```
