[(~back~)](../README.md)

BANKS

# GET REQUESTS

#### findAll

- http://localhost:2164/banks?search=10
```shell script
curl -X GET http://localhost:2164/banks?search=10
```

Expected Results

Example:
```json
[
   {
      "code":"104",
      "name":"Caixa",
      "urlimg":"https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-caixa.svg",
      "createdat":"2021-06-07T03:00:00.000Z",
      "updatedat":"2021-06-07T03:00:00.000Z"
   }
]
```