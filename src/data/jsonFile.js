const data={
  "id": "user_123",
  "username": "exampleUser",
  "email": "user@example.com",
  "passwordHash": "hashed_password",
  "profile": {
    "displayName": "Example User",
    "bio": "Just exploring this app",
    "age": 25,
    "gender": "Male",
    "interests": ["Music", "Travel", "Fitness"],
    "photos": [
      {
        "url": "https://example.com/photo1.jpg",
        "isMain": true
      },
      {
        "url": "https://example.com/photo2.jpg",
        "isMain": false
      }
    ],
    "location": {
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "anonymousLocation": false,
    "visibility": "Public",
    "verificationStatus": "Unverified",
    "healthInfo": {
      "HIVStatus": "Negative",
      "lastTestedDate": "2024-01-01"
    },
    "socialMedia": {
      "Instagram": "https://instagram.com/exampleUser",
      "Twitter": "https://twitter.com/exampleUser"
    }
  },
  "preferences": {
    "showMe": "Everyone",
    "ageRange": [18, 30],
    "distance": "Up to 5 miles"
  },
  "security": {
    "emailVerified": false,
    "twoFactorEnabled": false
  },
  "status": {
    "online": true,
    "lastActive": "2024-03-24T12:00:00Z"
  },
  "stats": {
    "views": 120,
    "likes": 30,
    "matches": 10
  },
  "subscription": {
    "status": "Active",
    "type": "Premium",
    "expiresOn": "2024-12-31"
  }
}
