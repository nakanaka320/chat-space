# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

|Column|Type|Options|
|:--:|:--:|:--:|
|password|string|null: false|
|name|string|null: false|
|E-mail|string|null: false|

- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :comments
- has_many :tweets

|Column|Type|Options|
|:--:|:--:|:--:|
|comment|integer|null: false|
|user_id|integer|null: false, foreign_key: true|

- has_many :tweets
- belongs_to :user

|Column|Type|Options|
|:--:|:--:|:--:|
|group|string|null: false|
|user_id|integer|null: false, foreign_key: true|

- has_many :groups_users
- has_many :users, through: :groups_users

|Column|Type|Options|
|:--:|:--:|:--:|
|image|text|null: false|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|

- belongs_to :users
- has_many :comments

|Column|Type|Options|
|:--:|:--:|:--:|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

- belongs_to :group
- belongs_to :user
