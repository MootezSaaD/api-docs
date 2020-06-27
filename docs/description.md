SMU/Portal is a staff and student portal that regroups several useful applications for universities. This is the documentation of the platform’s API extension.

>

## Authentication

This API uses token authentication (Bearer in HTTP Header). First you retrieve a new Bearer token using login/password authentication. After that you can use it to access other resources.


**Bearer token example**


`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTViZjAwZjJlZjkxMDEwYzRkZGNkY2UiLCJhdXRob3JpemVkIjp0cnVlLCJpYXQiOjE1ODc5MTM2OTYsImV4cCI6MTU4NzkxNzI5Nn0.EItMXtkA_iZf6YgS64aly2pANTPwOr24TAG7CU6SJmk`


The URL examples throughout this documentation use `token` as a placeholder. For these examples to work, you need to substitute the value with your own access token.


## Media Type

Where applicable this API uses the JSON media-type. Requests with a message-body are using plain JSON to set or update resource states.


The API accepts JSON in request bodies and requires that the `Content-type: application/json` header be specified for all such requests. The API will always respond with a JSON object, unless stated otherwise. Depending on context, resources may be returned as single objects or as arrays of objects, nested within the response object.


`Content-type: application/json` and `Accept: application/json` headers **should** be set on all requests if not stated otherwise.


## Status codes

This API uses HTTP status codes to communicate with the API consumer.

+ `200 OK` - Response to a successful GET, PUT, PATCH or DELETE.

+ `400 Bad Request` - Malformed request; request body validation errors.

+ `404 Not Found` - When a non-existent resource is requested.

+ `500 Server Error` - Something went wrong on the API end.

## Roles

Each API endpoint has described minimal role to access. Only users with specific roles can access those endpoints. For insufficient role `403 Forbidden` HTTP response will be returned.


User roles:

  + `1 (unconfirmed)`    - registered user with non-confirmed e-mail address
  + `2 (confirmed)`      - registered user with confirmed e-mail address
  + `3 (student)`        - user who can have access the student portal
  + `4 (professor)`     - user who can have access the professor portal
  + `5 (administrator)` - user who has access to administrative tools


## Encoding

Every string passed to and from the API needs to be UTF-8 encoded. For maximum compatibility, normalize to Unicode Normalization Form C (NFC) before UTF-8 encoding.

>

---