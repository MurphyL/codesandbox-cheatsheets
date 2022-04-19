# Window function

```sql
SELECT col1,
  window_function_name(col2),
  OVER([PARTITION BY col1] [ORDER BY col3]) AS col_alias
FROM table_name;
```
