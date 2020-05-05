 create TABLE issues (
    id SERIAL PRIMARY KEY,
    team_id numeric not null,
    category text not null,
    summary text not null,
    description text not null,
    assignee text,
    severity text NOT null,
    priority text NOT null,
    resolution text NOT null,
    resolved_by numeric,
    creator_id NUMERIC NOT NULL,
    creator_user_name text NOT null,
    date_updated TIMESTAMP NOT NULL DEFAULT now(),
    date_created TIMESTAMP NOT NULL DEFAULT now()
)



