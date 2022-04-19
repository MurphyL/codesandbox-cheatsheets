# Browsing

```sql
SHOW PROCESSLIST;
KILL process_number;
```

# Backup & Restore

```shell
# Backup Database to SQL File
mysqldump -u Username -p dbNameYouWant > databasename_backup.sql

# Restore from backup SQL File
mysql - u Username -p dbNameYouWant < databasename_backup.sql;
```

# Users & Privileges

```sql
CREATE USER 'user'@'localhost';
GRANT ALL PRIVILEGES ON base.* TO 'user'@'localhost'
IDENTIFIED BY 'password';

GRANT SELECT, INSERT, DELETE ON base.* TO 'user'@'localhost'
IDENTIFIED BY 'password';

-- one permission only
REVOKE ALL PRIVILEGES ON base.*
FROM 'user'@'host';

-- all permissions
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'user'@'host';

FLUSH PRIVILEGES;

DROP USER 'user'@'host';

-- Host '%' indicates any host.
```

# Repair Tables After Unclean Shutdown

```shell
mysqlcheck --all-databases;
mysqlcheck --all-databases --fast;
```
