# Array Sorting
In this blog we are going to sort an array without the use of any build in methods in our language.


## Algorethim

* The first thing we create a function called insertionSort that takes an array as a parameter.

* Declare two variables ( temp , min );

* Create nested two for loops , the first one is iterating over the array exept the last element and assign the min variable to the i value each time we iterate, and the second one to iterate over the array starting from the second element then checking between two followed elements if the second element is smaller than the fist element each time.
* Then assign the temp value to the elemnt with the index of min , and shift between the element with the index min and the element with the index of i. 


## Pseudocode
![PC](/assets/pseudoCode.png)


# Trace
## Array Sample => [ 8 , 4 , 23 , 42 , 16 , 15 ] 

## Pass 1 :
Input of this pass ==> [ 8 , 4 , 23 , 42 , 16 , 15 ]<br>
min = i = 0<br>
j = i + 1 = 1<br>
4 is smaller than 8 then ==> min = j = 1 <br>
and over the iterate it still the smallest

Shifting Part :<br>
temp = 4 <br>
arr [ 1 ] = 8 <br>
arr [ 0 ] = 4 <br>

Output of this pass ==> [ 4 , 8 , 23 , 42 , 16 , 15 ]

## Pass 2 :
Input of this pass ==> [ 4 , 8 , 23 , 42 , 16 , 15 ]<br>
min = i = 1<br>
j = i + 1 = 2<br>
8 is already smaller than the rest of the elements so min = 1<br>

Shifting Part :<br>
temp = 8 <br>
arr [ 1 ] = 8 <br>
arr [ 1 ] = 8 <br>

Output of this pass ==> [ 4 , 8 , 23 , 42 , 16 , 15 ]

## Pass 3 :
Input of this pass ==> [ 4 , 8 , 23 , 42 , 16 , 15 ]<br>
min = i = 2<br>
j = i + 1 = 3<br>
16 is smaller than 23 then min = 4 <br>
15 is smaller than 16 then min = 5 <br>

Shifting Part :<br>
temp = 15 <br>
arr [ 5 ] = 23 <br>
arr [ 2 ] = 15 <br>

Output of this pass ==> [ 4 , 8 , 15 , 42 , 16 , 23 ]

## Pass 4 :
Input of this pass ==> [ 4 , 8 , 15 , 42 , 16 , 23 ]<br>
min = i = 3<br>
j = i + 1 = 4<br>
16 is smaller than 42 then min = 4 <br>

Shifting Part :<br>
temp = 16 <br>
arr [ 4 ] = 42 <br>
arr [ 3 ] = 16 <br>

Output of this pass ==> [ 4 , 8 , 15 , 16 , 42 , 23 ]

## Pass 5 :
Input of this pass ==> [ 4 , 8 , 15 , 16 , 42 , 23 ]<br>
min = i = 4<br>
j = i + 1 = 5<br>
23 is smaller than 42 then min = 5 <br>

Shifting Part :<br>
temp = 23 <br>
arr [ 5 ] = 42 <br>
arr [ 4 ] = 23 <br>

Output of this pass ==> [ 4 , 8 , 15 , 16 , 23 , 42 ]

## Pass 6 :
Input of this pass ==> [ 4 , 8 , 15 , 16 , 23 , 42 ]<br>
min = i = 5<br>
j = i + 1 = 6<br>

It will not go inside the second loop so it will swape with itself

Shifting Part :<br>
temp = 42 <br>
arr [ 5 ] = 42 <br>
arr [ 5 ] = 42 <br>

Output of this pass ==> [ 4 , 8 , 15 , 16 , 23 , 42 ]


<hr>


## White Board
![WB](/assets/arraySort.png)
