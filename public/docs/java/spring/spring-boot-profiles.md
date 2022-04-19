# Set Profiles

## Shell

```shell
# Environment Variable
export spring_profiles_active=dev

# VM properties
-Dspring.profiles.active=dev
```

## application.properties

```properties
spring.profiles.active=dev
```

## programmatically

```java
// Programmatically via SpringApplication class
SpringApplication.setAdditionalProfiles("dev");

// Programmatically via ConfigurableEnvironment
@Autowired
public DemoApplicationInitializer(ConfigurableEnvironment env) {
  env.setActiveProfiles("someProfile");
}

// Programmatically via WebApplicationInitializer Interface
@Configuration
public class DemoWebApplicationInitializer implements WebApplicationInitializer {

    @Override
    public void onStartup(ServletContext context) throws ServletException {
        context.setInitParameter("spring.profiles.active", "dev");
    }
}

// @ActiveProfile in Tests
@ActiveProfiles("dev")
```

# The Default Profile

- `spring.profiles.default`
- `spring.active.profile`

# Get Active Profiles

```java
// Using @Value
public class ProfileManager {

    @Value("${spring.profiles.active:}")
    private String activeProfiles;

    @Autowired
    private Environment environment;

    public String showProfiles() {
        // Using @Value
        for (String name : activeProfiles.split(",")) {
            System.out.println("Profile:" + name);
        }
        // Using Environment
        for (String name : environment.getActiveProfiles()) {
          System.out.println("Profile:" + name);
        }
    }

}

// Using @Profile
@Component
@Profile("prod")
public class ProdDatasourceConfig implements DatasourceConfig {

    @Override
    public void setup() {
       System.out.println("Setting up for PROD environment.");
    }

}
```

# Multi-Document Files

```properties
my.prop=used-always-in-all-profiles
#---
spring.config.activate.on-profile=dev
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/db
spring.datasource.username=root
spring.datasource.password=root
#---
spring.config.activate.on-profile=production
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.url=jdbc:h2:mem:db;DB_CLOSE_DELAY=-1
spring.datasource.username=sa
spring.datasource.password=sa
```

## Profile Groups

```properties
spring.profiles.group.production=proddb,prodquartz
```
