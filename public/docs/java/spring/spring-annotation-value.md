# application.properties

```properties
string_value=high
list_values=A,B,C
map_values={key1: '1', key2: '2', key3: '3'}
```

# In Java class

```java
@Value("string_value")
private String stringValue;

// default value
@Value("${unknown:default_value}")
private String someDefault;

@Value("${list_values}")
private String[] valuesArray;

@Value("${some_values:1,2,3}")
private int[] intArrayWithDefaults;

@Value("#{systemProperties['priority']}")
private String spelValue;

@Value("#{systemProperties['unknown'] ?: 'some default'}")
private String spelSomeDefault;

@Value("#{'${list_values}'.split(',')}")
private List<String> valuesList;

@Value("#{${map_values}}")
private Map<String, Integer> valuesMap;

@Value("#{${map_values}.key1}")
private Integer valuesMapKey1;

@Value("#{${unknown_map : {key1: '1', key2: '2'}}}")
private Map<String, Integer> unknownMap;

@Value("#{${map_values}.?[value>'1']}")
private Map<String, Integer> valuesMapFiltered;

@Value("#{systemProperties}")
private Map<String, String> systemProperties;
```
