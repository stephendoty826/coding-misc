

text = """3 love
6 computers
2 dogs
4 cats
1 I
5 you"""

# put text into list and sort it
text_list = sorted(text.split("\n")) # [['1 I'], ['2 dogs'], ['3 love'], ['4 cats'], ['5 you'], ['6 computers']]

#? use two variables start and end both with differing sequences to get desired list of lists

start = 0

phrase_list = []

for i, phrase in enumerate(text_list): # third iteration: i = 2, start = 3, end = 6
  end = start + (i + 1)
  if(end < len(text_list) + 1):
    phrase_list.append(text_list[start:end])
    
  start += (i + 1)

print(phrase_list)

