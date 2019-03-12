## Server is live on:

https://yanna-howto.herokuapp.com/api/

# AUTH ROUTES

## **REGISTER**

_Method Url:_ `/api/auth/register`

_HTTP method:_ **[POST]**

#### Body

| name        | type    | required | description    |
| ----------- | ------- | -------- | -------------- |
| `username`  | String  | Yes      | Must be unique |
| `email`     | String  | Yes      | Must be unique |
| `password`  | String  | Yes      |                |
| `firstName` | String  | Yes      |                |
| `lastName`  | String  | Yes      |                |


_example:_

```
{
      "username": "matt04",
      "password": "password",
      "firstName": "Matt",
      "lastName": "Jones",
      "email": "matt@gmail.com"
}
```

#### Response

##### 201 (Created)

> If you successfully register a user the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
    "message": "Registration successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Implbm55IiwicGFzc3dvcmQiOiIkMmEkMTEkME5UTXFlcGF1YmQ0eXU2Lk9obFZsLlU3NGNXUVdWMVBwd0d2WnVGNldBYXB3cDlCTkNMd0MiLCJmaXJzdE5hbWUiOiJKZW5ueSIsImxhc3ROYW1lIjoiTGkiLCJlbWFpbCI6Implbm55QGdtYWlsLmNvbSIsInBob25lIjo0MTU2MjY3Njg4LCJpYXQiOjE1NDkxNzA1MjMsImV4cCI6MTU0OTE3NDEyM30.jOxH0YlAABmP_W3BaF3TowhCKHP9hFkLcyw-P-dQE_M",
    "userId": 7
}
```

---

## **LOGIN**

_Method Url:_ `/api/auth/login`

_HTTP method:_ **[POST]**

#### Body

| name       | type   | required | description                                                           |
| ---------- | ------ | -------- | ------------------------------------------------------------------    |  
| `username` | String | Yes      | Must match an email in the database                                   |
| `password` | String | Yes      | Must match a password in the database corresponding to above username |

_example:_

```
{
  username: "yannafaith",
  password: "password"
}
```

#### Response

##### 200 (OK)

> If you successfully login, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
    "message": "Welcome back Matt Jones",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRvbW15IiwicGFzc3dvcmQiOiIkMmEkMTEkaDBMb3hsU0pTTWxzcXNVUVQ3ZHBRZUVXbGxrNXk2M2xKVC9BQy9kU0kvWERPdnFxaHNiUjYiLCJlbWFpbCI6InRvbW15QGdtYWlsLmNvbSIsInBob25lIjo1MTA0MDgyNTg3LCJpYXQiOjE1NDkzMDEyNDMsImV4cCI6MTU0OTMwNDg0M30.TXnqIh3moCBZX-FDK5kuUURkLZtWfxmIZO3IqQhlT50"
    "userId": 7
}
```

---

# USERS ROUTES

## **GET USERS**

_Method Url:_ `/api/users`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
[
    {
        "userId": 1,
        "username": "tommy",
        "password": "$2a$11$LQImXlHE7dt0RSD9gjuvBecaZMMKYuW.vGcWsi3YumGU25PwLiFM2",
        "firstname": "Tommy",
        "lastname": "Carr",
        "email": "tommy@gmail.com",
        "phone": 5104082587
    },
    {
        "userId": 2,
        "username": "linda",
        "password": "$2a$11$d6mtGCQJBekPkqHvyog7GuaE82AfjcXzytL3ELtR8Dc.ENBNu7i/a",
        "firstname": "Linda",
        "lastname": "La",
        "email": "linda@gmail.com",
        "phone": 5102382227
    },
    {
        "userId": 3,
        "username": "jimmy",
        "password": "$2a$11$zXVFMlzrFfu9aYoJFOJCs.94KBfBvt3/BODdYaMWCj4ozs1EHj/Vy",
        "firstname": "Jimmy",
        "lastname": "Butler",
        "email": "jimmy@gmail.com",
        "phone": 7072272555
    }
]
```

---


# How-To

**Pitch**

- Have a life hack? Share it on how-to. Posts with the most likes/reviews/attempts will be at the top of the feed. Simplifying life for everyone.

**MVP**

1. An on-boarding process for a new general user (consumer).
1. An on-boarding process for user who wants to generate content (creator).
1. Ability to easily create & setup a how-to guide.
1. Ability to easily edit & delete a how-to guide.
1. Ability to easily view, search, find & filter how-to guides.

**Stretch**

- tbd

---

[Technical Design Document](https://docs.google.com/document/d/1pqIehm7TRPA16RRoL4408-N7Ml7xRKgG7_9sYUxTSOo/)

[Trello Board](https://trello.com/b/jiWkPUrs/build-week)

---

## Team

Backend Architect - [Kayanna Chandler](https://github.com/yannafaith)

Frontend Architects - [Thomas Folbrecht](https://github.com/tfolbrecht) and [Jonathan Picazo](https://github.com/macjabeth)

UI/Landing Page - [Daniel O'Neill](https://github.com/danpatrickoneill) and [Christian Ipanaque](https://github.com/chrisipanaque)

Team Lead - [Thomas Greenhalgh](https://github.com/tgreenhalgh)
