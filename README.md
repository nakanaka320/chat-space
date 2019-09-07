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
|name|string|null: false|
|E-mail|string|null: false|

  has_many :room
  has_many :comment
  has_many :tweet

|Column|Type|Options|
|:--:|:--:|:--:|
|comment|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

  has_many :tweet
  belongs_to :user

|Column|Type|Options|
|:--:|:--:|:--:|
|room|string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

  has_many :user

|Column|Type|Options|
|:--:|:--:|:--:|
|image|text|null: false, foreign_key: true|
|text|text|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

  belongs_to :user
  has_many :comment