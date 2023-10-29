

def decode(message_file):

  # opens messge_file.txt in read mode
  with open(f'./{message_file}', "r") as opened_file:

    # reads file contents 
    text = opened_file.read()

    # put text into list
    text_list = text.split("\n") # output -> ['1 I', '2 dogs', '3 love', '4 cats', '5 you', '6 computers']

    # sorts the list in place
    text_list.sort() #todo phrase list is being sorted in order this 1, 10, 100, 101



    # building a list to mimic the pyramid. Top layer is first, second layer second and so on
    startIndex = 0 

    # empty list to be filled in below for-loop
    phrase_list = []

    # using for-loop to iterate over text_list and put together the pyramid i.e [ ['1 I'], ['2 dogs', '3 love'], ['4 cats', '5, you', '6, computers'] ]
    for i, phrase in enumerate(text_list): 

      endIndex = startIndex + (i + 1)

      # breaks out of for-loop when out of elements in text_list
      if(endIndex > len(text_list)): 
        break

      # appends shallow copy of text_list to phrase_list 
      phrase_list.append(text_list[startIndex:endIndex])
        
      startIndex += (i + 1)

    print(phrase_list)

    decoded_message = ""

    # for-loop to build decoded_message
    for phrase in phrase_list:
      # adds the last word of each list to decoded_message string
      decoded_message += (phrase[-1][2:] + " ")

    return decoded_message

print(decode("coding_qual_input.txt"))