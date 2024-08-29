# Description:

Given a dollar amount between 0.00 and 999,999.00, create a program that will provide a worded representation of a dollar amount on a check.

# Input:

You will be given one line, the dollar amount as a float or integer. It can be as follows:

    400120.0
    400120.00
    400120

# Output:

This will be what you would write on a check for the dollar amount.

    Four hundred thousand, one hundred twenty dollars and zero cents.

edit: There is no and between hundred and twenty, thank you /u/AllanBz

# Challenge Inputs:

    333.88
    742388.15
    919616.12
    12.11
    2.0

# Challenge Outputs:

    Three hundred thirty three dollars and eighty eight cents.
    Seven hundred forty two thousand, three hundred eighty eight dollars and fifteen cents.
    Nine hundred nineteen thousand, six hundred sixteen dollars and twelve cents.
    Twelve dollars and eleven cents.
    Two dollars and zero cents.

# Bonus:

While I had a difficult time finding an official listing of the world's total wealth, many sources estimate it to be in the trillions of dollars. Extend this program to handle sums up to 999,999,999,999,999.99

# Challenge Credit:

In part due to Dave Jones at Spokane Community College, one of the coolest programming instructors I ever had.

# Notes:

This is my first submission to /r/dailyprogrammer, feedback is welcome.

edit: formatting