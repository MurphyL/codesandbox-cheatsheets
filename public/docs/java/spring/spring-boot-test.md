```java
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest(
    classes = Application.class,
    webEnvironment = SpringBootTest.WebEnvironment.NONE
)
public class TestDemo {

    @Autowired
    private JavaMailSender javaMailSender;

}
```
