export const users = [
  {
    "_id": "u101",
    "fullname": "User1",
    "imgUrl": "/img/img1.jpg",
    "isSeller": false,
    "username": "user1",
    "password": "secret",
    "messages": [
      {
        "withUser": "u102",
        "chat": [
          {
            "isSent": true,
            "msg": "HelloShaul",
            "sentAt": 123123
          },
          {
            "isSent": false,
            "msg": "HelloOren",
            "sentAt": 123133
          },
          {
            "isSent": true,
            "msg": "AtaBaBeshabat?",
            "sentAt": 123163
          },
          {
            "isSent": false,
            "msg": "Lo:(",
            "sentAt": 123163
          }
        ]
      }
    ],
    "wishList": [
      "gigId1",
      "gigId2",
      "gigId3"
    ]
  },
  {
    "_id": "u102",
    "fullname": "User 2",
    "imgUrl": "/img/img2.jpg",
    "isSeller": false,
    "username": "user2",
    "password": "secret",
    "wishList": [
      "gigId1",
      "gigId2",
      "gigId3"
    ]
  },
  {
    "_id": "u103",
    "fullname": "User 3",
    "imgUrl": "/img/img3.jpg",
    "isSeller": false,
    "username": "user3",
    "password": "secret",
    "messages": null,
    "wishList": []
  }
]