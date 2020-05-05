create TABLE users (
    id SERIAL PRIMARY KEY,
    user_name Text not null UNIQUE,
      full_name TEXT NOT NULL,
  password TEXT NOT NULL,
  team_id Numeric,
  team_name Text,
  title text not null,
  picture bytea,
    administrator boolean DEFAULT FALSE,
    date_created TIMESTAMP NOT NULL DEFAULT now()
)