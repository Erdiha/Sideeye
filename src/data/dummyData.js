export const dummyProfiles = [
  {
    id: "user1",
    username: "AdventurousAlex",
    age: 27,
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
      latitude: 34.1049344,
      longitude: -118.2302208,
    },
    stats: {
      sexual_preference: "Gay",
      height: "6'1\"",
      weight: "190 lbs",
      bust: "34 in",
      waist: "30 in",
      hips: "36 in",
      shoe_size: "10",
    },

    bio: "Outdoor enthusiast and tech geek. Love exploring new trails and coding new projects.",
    interests: ["hiking", "technology", "travel"],
    photos: [
      { url: "/me.jpg", is_main: true },
      { url: "/alex_hiking.jpg", is_main: false },
      { url: "/alex_travel.jpg", is_main: false },
      { url: "/alex_tech.jpg", is_main: false },
    ],
    last_active: "2024-03-15T08:30:00Z",
    online_status: "offline",
    preferences: {
      looking_for: ["friends", "networking"],
      age_range: [24, 32],
    },
    privacy_settings: {
      show_distance: true,
      show_age: true,
    },
    verification_status: "verified",
  },
  {
    id: "user2",
    username: "CreativeChris",
    age: 31,
    location: {
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      latitude: 34.1047344,
      longitude: -118.2312208,
    },
    stats: {
      sexual_preference: "Bisexual",
      height: "5'9\"",
      weight: "175 lbs",
      bust: "33 in",
      waist: "28 in",
      hips: "35 in",
      shoe_size: "9",
    },
    bio: "Artist and musician. Passionate about creating and sharing beautiful things.",
    interests: ["art", "music", "photography"],
    photos: [
      { url: "/chris_main.jpg", is_main: true },
      { url: "/chris_art.jpg", is_main: false },
      { url: "/chris_music.jpg", is_main: false },
      { url: "/chris_photo.jpg", is_main: false },
    ],
    last_active: "2024-03-15T10:45:00Z",
    online_status: "online",
    preferences: {
      looking_for: ["dates", "chat"],
      age_range: [28, 35],
    },
    privacy_settings: {
      show_distance: false,
      show_age: true,
    },
    verification_status: "pending",
  },
  {
    id: "user3",
    username: "FitnessFreak",
    age: 29,
    location: {
      city: "Miami",
      state: "FL",
      country: "USA",
      latitude: 34.1059344,
      longitude: -118.2322208,
    },
    stats: {
      sexual_preference: "Gay",
      height: "6'2\"",
      weight: "200 lbs",
      bust: "36 in",
      waist: "32 in",
      hips: "38 in",
      shoe_size: "11",
    },
    bio: "Gym rat and health nut. Always chasing that next fitness goal.",
    interests: ["fitness", "nutrition", "running"],
    photos: [
      { url: "/fitness_main.jpg", is_main: true },
      { url: "/fitness_gym.jpg", is_main: false },
      { url: "/fitness_run.jpg", is_main: false },
      { url: "/fitness_food.jpg", is_main: false },
    ],
    last_active: "2024-03-15T07:00:00Z",
    online_status: "offline",
    preferences: {
      looking_for: ["workout partners", "friends"],
      age_range: [26, 32],
    },
    privacy_settings: {
      show_distance: true,
      show_age: true,
    },
    verification_status: "verified",
  },
  {
    id: "user4",
    username: "GlobeTrotter",
    age: 34,
    location: {
      city: "New York",
      state: "NY",
      country: "USA",
      latitude: 34.1069344,
      longitude: -118.2332208,
    },
    stats: {
      sexual_preference: "Gay",
      height: "5'11\"",
      weight: "180 lbs",
      bust: "32 in",
      waist: "29 in",
      hips: "34 in",
      shoe_size: "9.5",
    },
    bio: "World traveler and language enthusiast. Exploring cultures and making connections.",
    interests: ["travel", "languages", "culture"],
    photos: [
      { url: "/travel_main.jpg", is_main: true },
      { url: "/travel_europe.jpg", is_main: false },
      { url: "/travel_asia.jpg", is_main: false },
      { url: "/travel_food.jpg", is_main: false },
    ],
    last_active: "2024-03-15T12:30:00Z",
    online_status: "online",
    preferences: {
      looking_for: ["chat", "travel buddies"],
      age_range: [30, 38],
    },
    privacy_settings: {
      show_distance: false,
      show_age: true,
    },
    verification_status: "verified",
  },
];