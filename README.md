* Deployment instructions

* ...
# userテーブル
|Column|Type|Options|
|:--:|:--:|:--:|
|password|string|null: false|
|name|string|null: false|
|E-mail|string|null:false , unique: true|

# Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :comments

# commentテーブル
|Column|Type|Options|
|:--:|:--:|:--:|
|group|string||
|comment|text|null: false|
|image|text||
|user_id|references|null: false, foreign_key: true|

# Association
- belongs_to :user
- belongs_to :group

# groupテーブル
|Column|Type|Options|
|:--:|:--:|:--:|
|group|string|null: false|

# Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :comments

# groups_usersテーブル
|Column|Type|Options|
|:--:|:--:|:--:|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

# Association
- belongs_to :group
- belongs_to :user