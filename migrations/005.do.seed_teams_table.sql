TRUNCATE teams CASCADE;
insert into teams (team_name, company, team_password, creator_id)
VALUES 
('Microsoft', 'Microsoft', '$2a$10$w9NMvoUtctDegO.sAJFdEOt1igq68zVfAZhnUqYkfaCS4wl2V7g5.', 1),
('Apple', 'Apple', '$2a$10$w9NMvoUtctDegO.sAJFdEOt1igq68zVfAZhnUqYkfaCS4wl2V7g5.', 3),
('Thinkful', 'Thinkful', '$2a$10$w9NMvoUtctDegO.sAJFdEOt1igq68zVfAZhnUqYkfaCS4wl2V7g5.', 4),
('DemoTeam', 'DemoTeam', '$2a$10$w9NMvoUtctDegO.sAJFdEOt1igq68zVfAZhnUqYkfaCS4wl2V7g5.', 1),
('Facebook', 'Facebook', '$2a$10$w9NMvoUtctDegO.sAJFdEOt1igq68zVfAZhnUqYkfaCS4wl2V7g5.', 5)

