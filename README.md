# developer skills

this section is devoted to thinking like a developer. the first problem presented is calculating daily temperature amplitude from a data set of temperature readings taken though the day that may include some reading errors.

My first step in solving this problem was to find out what temperature amplitude is, and i learned that it is the difference between the hightest and lowest temperatures over a period of time. Son then i knew i would have to search the data i was given, pick out hte highest temperature and lowest temperature for a given day and find the difference between the two.

next i looked at my data set, which was an array of mostly numbers, with one string 'error' reading included. My first challenge would be to find a way to take an array containing different datatypes and return an array containing information in only the type i wanted. my idea was to write a loop that would examine the type of each item in the array and push only numbers to a new array.

once i have an array of numbers i would need to find the highest and lowest numbers in the set. My idea was to create a variable that would hold the value of the daily high temperature and use another loop that would set the value of the variable as the first item in the number array and then compare the first item in the array to the second (and so on down the line) replacing the value held in the variable if the next item was higher than the one that came before it, then do the same with a low temp variable and a loop replacing value if the next number in the array was lower than the one that came before it.

Finally, once both high and low temps had been found the difference between the two could be returned.

The challenge for this section is to print a string that states forecasted daily temperatures and in how many days the temperature is forecasted for.

we are supplied with an array of numbers that are the temperature predictions for each of the coming days in sequential order. the length of the array is unknown and can vary.

the first thing i did was to create a function skeleton that takes in an array as its only argument.
