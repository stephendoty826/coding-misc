

def decode(message_file):

  # opens message_file.txt in read mode - Note: if the file is in a different folder, the path provided here will need to be updated accordingly.
  with open(f'./{message_file}', "r") as opened_file:

    # reads file contents 
    text = opened_file.read()

    # put text into list split on the new line character
    text_list = text.split("\n") # output -> ['1 I', '2 dogs', '3 love', '4 cats', '5 you', '6 computers']



    # empty list to be filled in below for-loop
    phrase_dict = {}

    # using for-loop to fill phrase_dict - i.e. {1: "dog", 2: "cat", 3: "hamster"}
    for phrase in text_list:

      # splits the phrase on the " "
      split_phrase = phrase.split(' ')

      num = int(split_phrase[0])

      text = split_phrase[1]

      phrase_dict[num] = text



    message = ""

    decode_key = 0

    # for-loop to build decoded_message
    for num in range(len(phrase_dict)):
      # decode_key follows the pyramid pattern 1, 3, 6, 10, 15... 
      decode_key = decode_key + (num + 1)

      # ensures no KeyError occurs 
      if(decode_key > len(phrase_dict)): 
        break

      # adds each phrase to message along with a space
      message += (phrase_dict[decode_key] + " ")
      
    return message

# print(decode('message_file.txt'))

print(decode("coding_qual_input.txt"))








# for i, phrase in enumerate(text_list): 

#   endIndex = startIndex + (i + 1)

#   # breaks out of for-loop when out of elements in text_list
#   if(endIndex > len(text_list)): 
#     break

#   # appends shallow copy of text_list to phrase_list 
#   phrase_list.append(text_list[startIndex:endIndex])
    
#   startIndex += (i + 1)