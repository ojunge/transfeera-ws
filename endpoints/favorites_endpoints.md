[(~back~)](../README.md)

FAVORITES

# GET REQUESTS

#### findAll

- http://localhost:2164/favorites?search=Dean
```shell script
curl -X GET http://localhost:2164/favorites?search=Dean
```

Expected Results

Example:
```json
[
   {
      "id":1,
      "name":"Dean Winchester",
      "nif":"72385156016",
      "email":"dean@gmail.com",
      "agency":"0001",
      "agencydigit":"0",
      "account":"258353",
      "accountdigit":"4",
      "bankcode":"237",
      "accounttypecode":"CC",
      "status":"R",
      "createdat":"2021-06-09T03:00:00.000Z",
      "updatedat":"2021-06-09T03:00:00.000Z",
      "urlimg":"https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-bradesco.svg"
   }
]
```


#### findById

- http://localhost:2164/favorites/3
```shell script
curl -X GET http://localhost:2164/favorites/3
```

Expected Results

Example:
```json
{
   "id":3,
   "name":"John Wick",
   "nif":"98756157061",
   "email":"john.wick@gmail.com",
   "agency":"2343",
   "agencydigit":"0",
   "account":"0092847",
   "accountdigit":"9",
   "bankcode":"756",
   "accounttypecode":"CF",
   "status":"R",
   "createdat":"2021-06-09T03:00:00.000Z",
   "updatedat":"2021-06-09T03:00:00.000Z"
}
```

# POST REQUESTS


#### save

POST - http://localhost:2164/favorites

Post object:

Example:
```json
{
   "name":"My name",
   "nif":"12587869072",
   "email":"test@gmail.com",
   "agency":"721",
   "agencyDigit":"5",
   "account":"14285",
   "accountDigit":"7",
   "bankCode":"001",
   "accountTypeCode":"CC",
   "status":"V"
}

```

Expected return:

STATUS 200


# PUT REQUESTS


#### update

PUT - http://localhost:2164/favorites

Put object:

Example:
```json
{
   "name":"My name",
   "nif":"12587869072",
   "email":"test@gmail.com",
   "agency":"721",
   "agencyDigit":"5",
   "account":"14285",
   "accountDigit":"7",
   "bankCode":"001",
   "accountTypeCode":"CC",
   "status":"V"
}
```