# Create

```sql
CREATE TABLE demo_table (field1 type1, field2 type2);

CREATE TABLE demo_table (
  field1 type1, field2 type2,
  PRIMARY KEY (field1, field2),
  INDEX (field)
);

CREATE TABLE demo_table IF NOT EXISTS;

CREATE TEMPORARY TABLE demo_table;
```

# Update

```sql
ALTER TABLE demo_table MODIFY field1 type1;
ALTER TABLE demo_table MODIFY field1 type1 NOT NULL ...;

ALTER TABLE demo_table
CHANGE old_name_field1 new_name_field1 type1;

ALTER TABLE demo_table
CHANGE old_name_field1 new_name_field1 type1
NOT NULL ...;

ALTER TABLE demo_table ALTER field1 SET DEFAULT ...;
ALTER TABLE demo_table ALTER field1 DROP DEFAULT;


ALTER TABLE demo_table MODIFY field1 type1 FIRST;

ALTER TABLE demo_table MODIFY field1 type1
AFTER another_field;

ALTER TABLE demo_table
CHANGE old_name_field1 new_name_field1 type1
FIRST;

ALTER TABLE demo_table
CHANGE old_name_field1 new_name_field1 type1
AFTER another_field;

ALTER TABLE demo_table ADD new_name_field1 type1;
ALTER TABLE demo_table ADD new_name_field1 type1 FIRST;

ALTER TABLE demo_table ADD new_name_field1 type1
AFTER another_field;

ALTER TABLE demo_table DROP field1;
ALTER TABLE demo_table ADD INDEX (field);
```

# Remove

```sql
DROP TABLE table;
DROP TABLE IF EXISTS table;
DROP TABLE table1, table2, ...;
```
