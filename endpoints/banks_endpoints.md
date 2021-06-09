[(~back~)](../README.md)

BANKS

# GET REQUESTS

#### findAll

- http://localhost:2164/banks
```shell script
curl -X GET http://localhost:2164/banks
```

Expected Results

Example:
```json
[
   {
      "code":"001",
      "name":"Banco do Brasil",
      "urlimg":"https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-brasil.svg",
      "createdat":"2021-06-07T03:00:00.000Z",
      "updatedat":"2021-06-07T03:00:00.000Z"
   },
   {
      "code":"104",
      "name":"Caixa",
      "urlimg":"https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-caixa.svg",
      "createdat":"2021-06-07T03:00:00.000Z",
      "updatedat":"2021-06-07T03:00:00.000Z"
   },
   {
      "code":"237",
      "name":"Bradesco",
      "urlimg":"https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-bradesco.svg",
      "createdat":"2021-06-07T03:00:00.000Z",
      "updatedat":"2021-06-07T03:00:00.000Z"
   },
   {
      "code":"341",
      "name":"Itaú",
      "urlimg":"https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-itau.svg",
      "createdat":"2021-06-07T03:00:00.000Z",
      "updatedat":"2021-06-07T03:00:00.000Z"
   },
   {
      "code":"756",
      "name":"Sicoob",
      "urlimg":"https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-sicoob.svg",
      "createdat":"2021-06-07T03:00:00.000Z",
      "updatedat":"2021-06-07T03:00:00.000Z"
   }
]
```