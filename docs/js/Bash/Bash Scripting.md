# Bash Scripts

Bash (or shell) scripting is a great way to automate repetitive tasks. Bash scripts execute within a Bash shell interpreter terminal. Any command you can run in your terminal can be run in a Bash script.

The beginning of your script file should start with ``` #!/bin/bash ``` on its own line. This tells the computer which type of interpreter to use for the script. 

When saving the script file, it is good practice to place commonly used scripts in the ``` ~/bin/ ``` directory.

The script files also need to have the “execute” permission to allow them to be run. To add this permission to a file with filename: script.sh use:

```
chmod +x script.sh
```

# Running a script

Use the bash command ```./script.sh ``` 

Depending on the name of your file, this will change

# Variables

Within bash scripts (or the terminal for that matter), variables are declared by setting the variable name equal to another value. For example, to set the variable greeting to “Hello”, you would use the following syntax:

```
greeting="Hello"
```

To access the value of a variable, we use the variable name prepended with a dollar sign ($).

``` echo $greeting ```

# Conditionals 

When bash scripting, you can use conditionals to control which set of commands within the script run. Use if to start the conditional, followed by the condition in square brackets ([ ]). then begins the code that will run if the condition is met. else begins the code that will run if the condition is not met. Lastly, the conditional is closed with a backwards if, fi.

```
if [ $index -lt 5 ]
then
  echo $index
else
  echo 5
fi
```

Bash scripts use a specific list of operators for comparison. Here we used -lt which is “less than”. The result of this conditional is that if $index is less than 5, it will print to the screen. If it is 5 or greater, “5” will be printed to the screen.

Equal: -eq \
Not equal: -ne \
Less than or equal: -le \
Less than: -lt \
Greater than or equal: -ge \
Greater than: -gt \
Is null: -z 

When comparing strings, it is best practice to put the variable into quotes ("). This prevents errors if the variable is null or contains spaces.

``` if [ "$foo" == "$bar"] ```

Use == for Equal too

Use != for not equal

# Loops

There are 3 different ways to loop within a bash script: for, while and until.

A for loop is used to iterate through a list and execute an action at each step. 

``` 
for word in $paragraph
do
  echo $word
done
```

This would loop through every word in paragraph.

Here is how to iterate over a file system

```
for filename in source/*
do
  echo $filename
done
```

Within bash scripting until and while are very similar. while loops keep looping while the provided condition is true whereas until loops loop until the condition is true. Conditions are established the same way as they are within an if block, between square brackets. 

While Loop 

```
while [ $index -lt 5 ]
do
  echo $index
  index=$((index + 1))
done
```

Note that arithmetic in bash scripting uses the $((...)) syntax and within the brackets the variable name is not prepended with a $.

``` index=$((index + 1)) ```

# Inputs

To make bash scripts more useful, we need to be able to access data external to the bash script file itself. The first way to do this is by prompting the user for input. For this, we use the read syntax.

```
echo "Guess a number"
read number
echo "You guessed $number"
```

Another way to access external data is to have the user add input arguments when they run your script. These arguments are entered after the script name and are separated by spaces.

``` saycolors red green blue ```

Within the script, these are accessed using $1, $2, etc, where $1 is the first argument (here, “red”) and so on. Note that these are 1 indexed.

If your script needs to accept an indefinite number of input arguments, you can iterate over them using the "$@" syntax.

```
for color in "$@"
do
  echo $color
done
```

We can access external files to our script. You can assign a set of files to a variable name using standard bash pattern matching using regular expressions.

``` files=/some/directory/* ```


