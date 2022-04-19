# 检视 JVM 信息

```shell
# 查看 Java 线程
jps -mlv    # ${JAVA_HOME}/bin/jps
jcmd

# 查看 JVM 信息
jcmd <pid | main class> VM.version

# 查看 JVM 配置
jcmd <pid> VM.flags

# 查看 JVM 运行时间
jcmd <pid> VM.uptime

# 查看 JVM 配置的 Properties
jcmd <pid> VM.system_properties
```

# Explicit heap memory

```sh
# Units can be marked as g for GB, m for MB and k for KB
# Heap size: -Xms2G -Xmx5G,
-Xms<heap size>[unit]
-Xmx<heap size>[unit]

# MetaSpace size
-XX:MaxMetaspaceSize=<metaspace size>[unit]

# Young Generation
-XX:NewSize=<young size>[unit]
-XX:MaxNewSize=<young size>[unit]
```

# Dump heap memory

```sh
jmap -dump:[live],format=b,file=<file-path> <pid>

# JVM heap dump
jcmd <pid> GC.heap_dump <file-path>

# https://www.baeldung.com/java-analyze-thread-dumps
# https://www.baeldung.com/java-heap-dump-capture

# IBM Thread and Monitor Dump Analyzer for Java (TMDA)
```

## Dump while OutOfMemory

```sh
# -XX:OnOutOfMemoryError="shutdown -r"
-XX:+HeapDumpOnOutOfMemoryError
-XX:HeapDumpPath=./java_pid<pid>.hprof
-XX:OnOutOfMemoryError="< cmd args >;< cmd args >"
-XX:+UseGCOverheadLimit
```

# Garbage Collection

```sh
-XX:+UseSerialGC      # Serial Garbage Collector
-XX:+UseParallelGC    # Parallel Garbage Collector
-XX:+USeParNewGC      # CMS Garbage Collector
-XX:+UseG1GC          # G1 Garbage Collector
```

## GC Logging

```sh
-XX:+UseGCLogFileRotation
-XX:NumberOfGCLogFiles=< number of log files >
-XX:GCLogFileSize=< file size >[ unit ]
-Xloggc:/path/to/gc.log
```
