CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- CREATE TABLE profiles (
--     user_id INTEGER REFERENCES users(id),
--     bio TEXT,
--     age INTEGER,
--     interests TEXT,
--     main_photo_id INTEGER,
--     PRIMARY KEY (user_id)
-- );

-- -- Create the photos table
-- CREATE TABLE photos (
--     id SERIAL PRIMARY KEY,
--     user_id INTEGER REFERENCES users(id),
--     url TEXT NOT NULL,
--     is_main BOOLEAN DEFAULT FALSE
-- );

-- -- Create the health_info table
-- CREATE TABLE health_info ( 5
--     user_id INTEGER REFERENCES users(id),
--     hiv_status VARCHAR(20),
--     last_tested_date DATE,
--     PRIMARY KEY (user_id)
-- );

-- -- Create the preferences table
-- CREATE TABLE preferences (
--     user_id INTEGER REFERENCES users(id),
--     show_me VARCHAR(20),
--     age_range_lower INTEGER,
--     age_range_upper INTEGER,
--     distance VARCHAR(20),
--     PRIMARY KEY (user_id)
-- );

-- -- Create the security table
-- CREATE TABLE security (
--     user_id INTEGER REFERENCES users(id),
--     email_verified BOOLEAN DEFAULT FALSE,
--     two_factor_enabled BOOLEAN DEFAULT FALSE,
--     PRIMARY KEY (user_id)
-- );

-- -- Create the status table
-- CREATE TABLE status (
--     user_id INTEGER REFERENCES users(id),
--     online BOOLEAN DEFAULT FALSE,
--     last_active TIMESTAMP,
--     PRIMARY KEY (user_id)
-- );

-- -- Create the stats table
-- CREATE TABLE stats (
--     user_id INTEGER REFERENCES users(id),
--     views INTEGER DEFAULT 0,
--     likes INTEGER DEFAULT 0,
--     matches INTEGER DEFAULT 0,
--     PRIMARY KEY (user_id)
-- );

-- -- Create the subscription table
-- CREATE TABLE subscription (
--     user_id INTEGER REFERENCES users(id),
--     status VARCHAR(20),
--     type VARCHAR(20),
--     expires_on DATE,
--     PRIMARY KEY (user_id)
-- );
