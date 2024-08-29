#Description

We are going to encrypt and decrypt with a mirror field.

It works like this:

We align letters to a mirror field:

     ab
    A \c
    B\ d
     CD
  
Every letter has now a mirror image

For example `A` has as mirror image `D`

       
    A-\ 
      | 
      D

The `/` and `\` act as a mirror that will turn the line 90 degrees like you would if you had a laserpointer pointed to a mirror.

The full letter grid will look like this (without the seperators):

     |a|b|c|d|e|f|g|h|i|j|k|l|m|
    -----------------------------
    A| | | | | | | | | | | | | |n
    -----------------------------
    B| | | | | | | | | | | | | |o
    -----------------------------
    C| | | | | | | | | | | | | |p
    -----------------------------
    D| | | | | | | | | | | | | |q
    -----------------------------
    E| | | | | | | | | | | | | |r
    -----------------------------
    F| | | | | | | | | | | | | |s
    -----------------------------
    G| | | | | | | | | | | | | |t
    -----------------------------
    H| | | | | | | | | | | | | |u
    -----------------------------
    I| | | | | | | | | | | | | |v
    -----------------------------
    J| | | | | | | | | | | | | |w
    -----------------------------
    K| | | | | | | | | | | | | |x
    -----------------------------
    L| | | | | | | | | | | | | |y
    -----------------------------
    M| | | | | | | | | | | | | |z
    -----------------------------
     |N|O|P|Q|R|S|T|U|V|W|X|Y|Z|

#Formal Inputs & Outputs

##Input description

You'll get a grid of 13 by 13 with mirrors and a word.  


       \\  /\    
                \
       /         
          \     \
        \        
      /      /   
    \  /      \  
         \       
    \/           
    /            
              \  
        \/       
       /       / 
    TpnQSjdmZdpoohd


##Output description

Return the encrypted word

    DailyProgrammer
 
#Bonus

Use the mirrors as a encryption key file and make you program encrypt in realtime (as you type)

#Finally

Have a good challenge idea?

Consider submitting it to /r/dailyprogrammer_ideas

#Edit
Thanks to you all for pointing out the typo. Fixed it now. 

Special thanks to /u/skeeto to provide us with an animated version http://i.imgur.com/uML0tJK.gif 