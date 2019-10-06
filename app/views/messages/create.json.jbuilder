json.user.name @message.user.name
json.time @massage.created_at.strftime("%Y/%m/%d %H:%M")
json.content @message.content
json.image @message.image.url