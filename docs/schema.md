# Schema Information

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rating      | integer   | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
place_id | integer   | not null, foreign key (references places), indexed

## places
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
address     | string    | not null
web_url     | string    | not null
lat         | float     | not null
lng         | float     | not null

##photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description | string    | not null
place_id    | integer   | not null
author_id   | float     | not null


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
place_id     | integer   | not null, foreign key (references notes), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
