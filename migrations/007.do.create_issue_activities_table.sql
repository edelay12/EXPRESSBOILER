 create TABLE issue_activities (
    id SERIAL PRIMARY KEY,
    issue_id SERIAL REFERENCES issues(id),
    team_name Text not null,
    change_summary text,
    change_description text,
    resolution text not null,
    creator_id serial references users(id),
    date_created TIMESTAMP NOT NULL DEFAULT now()
)