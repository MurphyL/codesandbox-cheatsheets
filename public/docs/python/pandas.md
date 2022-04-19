# 导入数据

```python
# 从 CSV 文件导入数据
pd.read_csv('file.csv', name=['列名','列名2'])
# 从限定分隔符的文本文件导入数据
pd.read_table(filename, header=0)
# Excel 导入，指定 sheet 和表头
pd.read_excel('file.xlsx', sheet_name=' 表1', header=0)
# 从 SQL 表/库导入数据
pd.read_sql(query, connection_object)
# 从 JSON 格式的字符串导入数据
pd.read_json(json_string)
# 解析 URL、字符串或者 HTML 文件，抽取其中的 tables 表格
pd.read_html(url)
# 从你的粘贴板获取内容，并传给 read_table()
pd.read_clipboard()
# 从字典对象导入数据，Key 是列名，Value是数据
pd.DataFrame(dict)
```

# 导出输出数据

```python
# 导出数据到CSV文件
df.to_csv('filename.csv')
# 导出数据到Excel文件
df.to_excel('filename.xlsx', index=True)
# 导出数据到 SQL 表
df.to_sql(table_name, connection_object)
# 以Json格式导出数据到文本文件
df.to_json(filename)
# 其他
df.to_html()  # 显示 HTML 代码
df.to_markdown() # 显示 markdown 代码
df.to_string() # 显示格式化字符
```

# 创建测试对象

```python
# 创建20行5列的随机数组成的 DataFrame 对象
pd.DataFrame(np.random.rand(20,5))
# 从可迭代对象 my_list 创建一个 Series 对象
pd.Series(my_list)
# 增加一个日期索引
df.index = pd.date_range('1900/1/30', periods=df.shape[0])
# 创建随机数据集
df = pd.util.testing.makeDataFrame()
# 创建随机日期索引数据集
df = pd.util.testing.makePeriodFrame()
df = pd.util.testing.makeTimeDataFrame()
# 创建随机混合类型数据集
df = pd.util.testing.makeMixedDataFrame()
```

# 查看、检查、统计、属性

```python
df.head(n) # 查看 DataFrame 对象的前n行
df.tail(n) # 查看 DataFrame 对象的最后n行
df.sample(n) # 查看 n 个样本，随机
df.shape # 查看行数和列数
df.info() # 查看索引、数据类型和内存信息
df.describe() # 查看数值型列的汇总统计
df.dtypes # 查看各字段类型
df.axes # 显示数据行和列名
df.mean() # 返回所有列的均值
df.mean(1) # 返回所有行的均值，下同
df.corr() # 返回列与列之间的相关系数
df.count() # 返回每一列中的非空值的个数
df.max() # 返回每一列的最大值
df.min() # 返回每一列的最小值
df.median() # 返回每一列的中位数
df.std() # 返回每一列的标准差
df.var() # 方差
s.mode() # 众数
s.prod() # 连乘
s.cumprod() # 累积连乘,累乘
df.cumsum(axis=0) # 累积连加,累加
s.nunique() # 去重数量，不同值的量
df.idxmax() # 每列最大的值的索引名
df.idxmin() # 最小
df.columns # 显示所有列名
df.team.unique() # 显示列中的不重复值
# 查看 Series 对象的唯一值和计数, 计数占比: normalize=True
s.value_counts(dropna=False)
# 查看 DataFrame 对象中每一列的唯一值和计数
df.apply(pd.Series.value_counts)
df.duplicated() # 重复行
df.drop_duplicates() # 删除重复行
# set_option、reset_option、describe_option 设置显示要求
pd.get_option()
# 设置行列最大显示数量，None 为不限制
pd.options.display.max_rows = None
pd.options.display.max_columns = None
df.col.argmin() # 最大值[最小值 .argmax()] 所在位置的自动索引
df.col.idxmin() # 最大值[最小值 .idxmax()] 所在位置的定义索引
# 累计统计
ds.cumsum() # 前边所有值之和
ds.cumprod() # 前边所有值之积
ds.cummax() # 前边所有值的最大值
ds.cummin() # 前边所有值的最小值
# 窗口计算(滚动计算)
ds.rolling(x).sum() #依次计算相邻x个元素的和
ds.rolling(x).mean() #依次计算相邻x个元素的算术平均
ds.rolling(x).var() #依次计算相邻x个元素的方差
ds.rolling(x).std() #依次计算相邻x个元素的标准差
ds.rolling(x).min() #依次计算相邻x个元素的最小值
ds.rolling(x).max() #依次计算相邻x个元素的最大值
```

# 数据清理

```python
df.columns = ['a','b','c'] # 重命名列名
df.columns = df.columns.str.replace(' ', '_') # 列名空格换下划线
df.loc[df.AAA >= 5, ['BBB', 'CCC']] = 555 # 替换数据
df['pf'] = df.site_id.map({2: '小程序', 7:'M 站'}) # 将枚举换成名称
pd.isnull() # 检查DataFrame对象中的空值，并返回一个 Boolean 数组
pd.notnull() # 检查DataFrame对象中的非空值，并返回一个 Boolean 数组
df.drop(['name'], axis=1) # 删除列
df.drop([0, 10], axis=0) # 删除行
del df['name'] # 删除列
df.dropna() # 删除所有包含空值的行
df.dropna(axis=1) # 删除所有包含空值的列
df.dropna(axis=1,thresh=n) # 删除所有小于 n 个非空值的行
df.fillna(x) # 用x替换DataFrame对象中所有的空值
df.fillna(value={'prov':'未知'}) # 指定列的空值替换为指定内容
s.astype(float) # 将Series中的数据类型更改为 float 类型
df.index.astype('datetime64[ns]') # 转化为时间格式
s.replace(1, 'one') # 用 ‘one’ 代替所有等于 1 的值
s.replace([1, 3],['one','three']) # 用'one'代替 1，用 'three' 代替 3
df.rename(columns=lambda x: x + 1) # 批量更改列名
df.rename(columns={'old_name': 'new_name'}) # 选择性更改列名
df.set_index('column_one') # 更改索引列
df.rename(index=lambda x: x + 1) # 批量重命名索引
# 重新命名表头名称
df.columns = ['UID', '当前待打款金额', '认证姓名']
df['是否设置提现账号'] = df['状态'] # 复制一列
df.loc[:, ::-1] # 列顺序反转
df.loc[::-1] # 行顺序反转, 下方为重新定义索引
df.loc[::-1].reset_index(drop=True)
```
