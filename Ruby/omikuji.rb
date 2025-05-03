# 条件分岐練習
number = rand(1..10)
puts number 
if number == 1
  puts "大吉！"
elsif number >= 2 && number <= 4 
  puts "中吉"
elsif number >= 5 && number <= 7
  puts "吉"
elsif number >= 7 && number <= 9
  puts "凶"
else
  puts "大凶…。"
end 