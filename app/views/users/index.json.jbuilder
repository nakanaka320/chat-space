json.array! @users do |user|
  json.name user.name
  json.id user.id
  # json.email @user.email
  # json.date @user.creared_at.strftime("%Y/%m/%d %H:%M")
  # json.date2 @user.updateed_at.strftime("%Y/%m/%d %H:%M")
end
