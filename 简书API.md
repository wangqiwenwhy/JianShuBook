# Application Program Interface (API)

```json
后面接口省略该路径： http://127.0.0.1:4000
```

### 1. 注册接口（post）：

```json
/api/register/user
```

* 昵称：数字、英文、汉字都可以，长度 16位以内吗，包含16位 
* 账号：11位数字（目前先不处理是不是手机号）
* 密码：6--16位 ，字母 数字

### 2. 登录接口（post）

```json
/api/login/user
```

### 状态码有4种

- code = 0 成功
- code = 1 服务器内部错误
- code = 2 密码错误
- code =3 用户名不存在


### 3. 将文章存到数据库的接口（post）

```json
/api/saveArtical/user
```

### 4. 获取存到数据库所有文章数据（get）

```json
/api/readArticle/user
```

### 5. 获取指定文章数据（get）

```json
/api/onlyArticle/user
```

### 6. 删除自己某一个文章的接口（get）

```json
/api/onlyDeleteArticle/user
```







 







