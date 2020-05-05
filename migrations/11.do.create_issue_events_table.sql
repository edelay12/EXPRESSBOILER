 create TABLE issue_events (
    id SERIAL PRIMARY KEY,
    user_id serial REFERENCES users(id),
    user_name text not null,
    team_id serial references teams(id),
    issue_id SERIAL REFERENCES issues(id), 
    change Text not null,
    status text not null,
    change_summary text,
    change_description text,
        date_updated TIMESTAMP NOT NULL DEFAULT now(),
    date_created TIMESTAMP NOT NULL DEFAULT now()
)

