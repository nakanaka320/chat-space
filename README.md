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

#userテーブル
|Column|Type|Options|
|:--:|:--:|:--:|
|name|string|null: false|
|E-mail|string|null: false|

#Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :comment
- has_many :tweet

#commentテーブル
|Column|Type|Options|
|:--:|:--:|:--:|
|comment|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

#Association
- has_many :tweet
- belongs_to :user

#groupテーブル
|Column|Type|Options|
|:--:|:--:|:--:|
|group|string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

#Association
- has_many :groups_users
- has_many :users, through: :groups_users

#tweetテーブル
|Column|Type|Options|
|:--:|:--:|:--:|
|image|text|null: false, foreign_key: true|
|text|text|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

#Association
- belongs_to :user
- has_many :comment

#groups_users_idテーブル
|Column|Type|Options|
|:--:|:--:|:--:|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

#Association
- belongs_to :group
- belongs_to :user
