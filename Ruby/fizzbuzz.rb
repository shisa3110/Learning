# fizzbuzz練習
# 1-100の数字を繰り返し表示。3の倍数でカレー！　5で割り切れたらライス！　15で割り切れたらカレーライス！
# ＝3で割り切れたらカレー！　5で割り切れたらライス！ 15で割り切れたらカレーライス！

# (1..100) .each do |i|
#   if i % 3 == 0
#     puts "カレー！"
#   elsif i % 5 == 0
#     puts "ライス！"
#   elsif i % 15 == 0
#     puts "カレーライス！"
#   else
#     puts i
#   end
# end 

# 上記を実行すると、elsifよりifの方が優先されるので「i % 15 == 0」が反応せず、15の倍数でもカレーライス！にならない。先に15の条件を持ってくる。

(1..100) .each do |i|
  if i % 15 == 0
    puts "カレーライス！"
  elsif i % 5 == 0
    puts "ライス！"
  elsif i % 3 == 0
    puts "カレー！"
  else
    puts i
  end
end

# 下記でも可能。().each doは、()のオブジェクトを繰り返す。 1..100 .times doは、timesメソッドの前の回数を繰り返す。
# 1..100.times do |i|
#   if i % 15 == 0
#     puts "カレーライス！"
#   elsif i % 5 == 0
#     puts "ライス！"
#   elsif i % 3 == 0
#     puts "カレー！"
#   else
#     puts i
#   end
# end