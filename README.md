# pokedex
[wooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooot](https://martekode.github.io/pokedex/)
======================
## The creatures of the forbidden land
Long ago there ws a forbidden land named Kanto full of majestical creatures with special powers. This land is long lost and forgotten by most.
Our hero, in contrary to the rest of the world, hopes to reignite the torch of knowledge and sets out to a dangerous mission. The task ahead will require the hero to find that forgotten land and log these creatures. Making a display for everyone to see is the end goal. so nobody can ever dispute the existance of this "wanderfull" world. (yes i meen WANDERfull, because we'll wander into uncharted territory).


## The Place to Show
Our hero's first steps were heavy sinds he found clues very quickly but ran in to troubles equally. He found data of the creatures but could get it out of the data retreiever. After searching for too long our hero decided to just do the task as was required of him and began his plan.
 First he set out the places to display everything. He gave them propper names to define where to put everything later. A box to let people interface with what they wanted to find. Because if they coould search themself for the creatures then the people couldn't say he faked it. After the markup he went on to find the creatures. 

## The first Pocket Monster
After doing the skeleton work for the display and querry interface he started to actually search for the creatures. He used a method at first that woul let the users search by name. But that gave too few results (only 20). But then he found a way to do it by id and got 1126 results. "So many.." he gasped. the hero than quickly made it so that the name would appear. Mission success... But now for the depiction of the creature itself. That was harder because it didn't give an img of the creature. But it gave another clue inside... He then searched for that clue and got what he wanted. Here the images were stored and by some quick selections knew which one he needed the front_default. And now that displays too. the users are going to be happy. The method for searching was changed back to names and not id's ,not too long afterwards. The hero mistook the 20 returned values for the limit, which wasn't the case at all.

## Moveset Observatory
Now that we can find the creatures and display them, it is easy now to set up camp and observe them. The hero got out his binoculars and started looking he saw that the latest data package gives information about their abilities. He made is so it would display 4 of them as the task stated. But the datapackage only contained 2... Here he missread the assignement and he was looking at the wrong data. Its was the moves data that he wanted and got crackin'. He made it so it would display the first 4, but he kept in mind that maybe later on he could make it check if he creature learns it by itself. Those movesets should be more relevant to show sinds the creature will learn it no mather what if it keeps getting stronger.

## Searching For The Evolutions
It became rapidly clear that these creatures had different formes. It wasn't tied to their age. Rather,... Its appeared to be tied to their experiance. The more they fought and used their movesetts the faster they would transform. So the hero decided to cattalogue them. He first tried to use the evolutions chain method, which after some time trying didn't work out... You could only search by the id of the creature, but the id fomr the evolution chain didn't match the pokemon id. So after some searching he found out he could use the pokemon species method. There you can search by name, which makes it easier. After some tweeking he came up with a solution that doesn't work completely but still well enough for now. It cattalogues the previous form of the pokemon. It later got fixed due to spelling mistake....

## After the dreams
After a good night of sleep, the hero started working.. He first changed the way it found the movesets of the creatures because if there were creatures with less then 4 movesets it would work but give errors. So a simple if check well do, should not only work for creatures with 1 moveset but also with 2, 3 or 4. After that the esthetics were important make it look like a, what the hero discovered already existed, pokédex.
He assigned an standard pokéball img in the beginning to get rid of the uggly missing img decoration (he tried to find something like text-decoration but couldn't find anything like it. :not([src]) was the only thing he found and that didn't work.).

## Annoying insects
The road to these creatures was tangled with many obstacles, but as usual the bugs were the most fierce. Getting rid of these bugs is hard but step by step it can be done. Squaching one bug at a time. The mime bug has been squached, but not before it tried to trample the hero. It managed to find a way to make every searched creature to be mr mime. But the hero found out what he did wrong and... SPLAT! The bug was gone. The hero made it so that now no mather what u search for, it'll always be lowercase so it is searchable. Uppercase bug = squached. Many more to go. The no evolution Bug Boss, The empty-ID-Bug Boss and the adding of maybe a forms checker... But all in time...
## find out in the next episode of Fantastic Pocket Monsters and Where To Find Them 
* ~html markup~
* ~fetching the creatures by id~ 
* ~movesets displayed~
* ~logging them~
* ~putting them in own container to later work with~
* ~looking into searching by name~
* ~displaying evolutions~
* fixing bugs
* adding exceptions
* adding fluff
