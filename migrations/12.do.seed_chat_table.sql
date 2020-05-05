TRUNCATE chat CASCADE;
insert into chat (user_id_sender, user_id_reciever, message)
VALUES 
(1, 2,'Hey how is the work on issue 3 going?'),
(2, 1,'Hey it is going good! working on it as we speak'),
(1, 2, 'Wonderful can you update it when your pr is finished?'),
(2, 1, 'Sure')
