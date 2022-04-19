```sql
SET PASSWORD = PASSWORD('new_pass');
SET PASSWORD FOR 'user'@'host' = PASSWORD('new_pass');
SET PASSWORD = OLD_PASSWORD('new_pass');
```

## Reset root password

```shell
/etc/init.d/mysql stop
mysqld_safe --skip-grant-tables

# Create another terminal
mysql> UPDATE mysql.user SET password=PASSWORD('new_pass') WHERE user='root';

# Switch back to the mysqld_safe terminal, kill the process using [Control + \]
$ /etc/init.d/mysql start
```
