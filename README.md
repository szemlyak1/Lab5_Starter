# Lab 5 - Starter
Contributors: Sean Zemlyak and Dmitri Singer

https://szemlyak1.github.io/Lab5_Starter/explore.html
https://szemlyak1.github.io/Lab5_Starter/expose.html

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, because sending a message is too big for a unit test, and a unit test was meant for small things that are in complete isolation.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, because for it to test the max length, it just needs to compare two numbers to each other, and it is all about pure logic so it can isolate itself.
