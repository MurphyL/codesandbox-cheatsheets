```sh
# sudo apt-get install apache2-utils -y
ab [options] [http[s]://]hostname[:port]/path
```

## Options are:

- -n requests: Number of requests to perform
- -c concurrency: Number of multiple requests to make at a time
- -t timelimit: Seconds to max. to spend on benchmarking, This implies -n 50000
- -s timeout: Seconds to max. wait for each response, Default is 30 seconds
- -p postfile: File containing data to POST. Remember also to set -T
- -u putfile: File containing data to PUT. Remember also to set -T
- -T content-type: Content-type header to use for POST/PUT data, eg. 'application/x-www-form-urlencoded'
- -C attribute: Add cookie, eg. 'Apache=1234'. (repeatable)
- -H attribute: Add Arbitrary header line, eg. 'Accept-Encoding: gzip'
