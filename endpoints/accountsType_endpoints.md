[(~back~)](../README.md)

ACCOUNTS TYPE

# GET REQUESTS

#### findAll

- http://localhost:2164/accountsType
```shell script
curl -X GET http://localhost:2164/accountsType
```

Expected Results

Example:
```json
[
   {
      "code":"CC",
      "name":"CONTA_CORRENTE",
      "createdat":"2021-06-07T03:00:00.000Z",
      "updatedat":"2021-06-07T03:00:00.000Z"
   },
   {
      "code":"CF",
      "name":"CONTA_FACIL",
      "createdat":"2021-06-07T03:00:00.000Z",
      "updatedat":"2021-06-07T03:00:00.000Z"
   },
   {
      "code":"CP",
      "name":"CONTA_POUPANCA",
      "createdat":"2021-06-07T03:00:00.000Z",
      "updatedat":"2021-06-07T03:00:00.000Z"
   }
]
```