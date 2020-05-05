 create TABLE chat (
    id SERIAL PRIMARY KEY,
    user_id_sender serial REFERENCES users(id),
    user_id_reciever serial references users(id),
    chat_id SERIAL, 
    message Text not null,
    date_created TIMESTAMP NOT NULL DEFAULT now()
)