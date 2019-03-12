## **GET USER BY ID**

_Method Url:_ `/api/users/:id`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
    {
        "userId": 2,
        "username": "linda",
        "password": "$2a$11$d6mtGCQJBekPkqHvyog7GuaE82AfjcXzytL3ELtR8Dc.ENBNu7i/a",
        "firstname": "Linda",
        "lastname": "La",
        "email": "linda@gmail.com",
        "phone": 5102382227
    }
```

---


## **GET POSTS BY USERID**

_Method Url:_ `/api/users/:id/posts`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
[
    {
        "itemId": 1,
        "owner": 1,
        "title": "Portable Speaker",
        "description": "Great speaker for a gathering or party",
        "brand": "Bose",
        "model": "5000XL",
        "label": "Speaker",
        "dailyPrice": 100,
        "weeklyPrice": 450,
        "available": 1,
        "renter": null
    },
    {
        "itemId": 6,
        "owner": 1,
        "title": "32 inch Curve Monitor",
        "description": "Dominate your enemies with this awesome monitor",
        "brand": "Samsung",
        "model": "32xl",
        "label": "Monitor",
        "dailyPrice": 60,
        "weeklyPrice": 250,
        "available": 0,
        "renter": 3
    }
]
```

---

## **UPDATE USER**

_Method Url:_ `/api/users/:id`

_HTTP method:_ **[PATCH]**

#### Response

##### 202 (Accepted)

```
{
    "message": "User: matt04 has been updated"
}
```

---

## **DELETE USER**

_Method Url:_ `/api/users/:id`

_HTTP method:_ **[DELETE]**

#### Response

##### 202 (Accepted)

```
{
    "message": "The user has been deleted."
}
```

---

## **UPLOAD ITEM IMAGE**

_Method Url:_ `/api/items/upload`

_HTTP method:_ **[POST]**

#### Response

##### 200 (Accepted)

```
{
    "message": "Your image has been uploaded successfully to cloudinary",
    "image": "http://res.cloudinary.com/tommaay/image/upload/v1549493382/lthab7knnbzjgcdpfvx9.jpg"
}
```

---
