```sh
Second  Minute  Hour  Day Month Weekday
*       *       *     *   *     *
┬       ┬       ┬     ┬   ┬     ┬
│       │       │     │   │     └─  Weekday  (0=Sun .. 6=Sat)
│       │       │     │   └───────  Month    (1..12)
│       │       │     └───────────  Day      (1..31)
│       │       └─────────────────  Hour     (0..23)
│       └─────────────────────────  Minute   (0..59)
└─────────────────────────────────  Second   (0..59)
```

# Operators

```sh
*	  all values
,	  separate individual values
-	  a range of values
/	  divide a value into steps
```

# Examples

```sh
0 0 * * * *         every hour
0 */15 * * * *      every 15 mins
0 0 */2 * * *       every 2 hours
0 0 18 * * 0-6      every week Mon-Sat at 6pm
0 10 2 * * 6,7      every Sat and Sun on 2:10am
0 0 0 * * 0         every Sunday midnight
```
