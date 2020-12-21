## 概要

## URL

## 機能一覧 

## 技術一覧
- Ruby  
- Ruby on Rails  
- haml  
- scss  
- JavaScriptによる非同期通信  
- Github  
- AWS(EC2) 

## アプリへの想い

## DB設計

### groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

#### Association
- belongs_to :group
- belongs_to :user


### groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|


#### Association
- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :messages


### usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

#### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages


### messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
|text|string|
|image|string|


#### Association
- belongs_to :user
- belongs_to :group
