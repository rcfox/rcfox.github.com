---
title: "Idea: Awk-style Parser for C"
category: ideas
published: false
tags:
- c
- parser
- incomplete
---


I recently learned about [gvpr][gvpr], which calls itself a "graph stream editor inspired by awk". It allows you to parse a [dot][dot] graph without having to worry about worrying about the grammar. For an example of how it might be used, see my [Springy Layout of Dot Graphs][springy] code, but the basics are:

    N { /* This is called for each node.
           You can access nodes like this: $.name, aget($,"color") */ }
        
    E { /* This is called for each edge.
           You can access the edge properties: $.head.name, aget($,"color") */ }

There's a bit more to it, but those are the fundamentals.

I think it would be neat to have something similar for C. Personally, I have had occasions where I've wanted to have every function call print out its name as the first thing that it does. Doing this by hand is tedious, and given the many legal ways of writing a function definition, it's practically impossible to write a regular expression to find them reliably. There's also no great way to use current parsers for a one-off change like this.

So far, the best I've found is [parsing with Clang][clang]. However, writing C++ to do a bit of stream editing seems like too much effort. I want to be able to simply write something like this, and pipe in my source files:

    function {
                printf("%s { printf(\"%s\"); %s }", $.signature, $.name, $.body);
             }

Another common desire is to stringify enum values. You could do something like this:

    enum_begin { printf("const char* %s_values[] = {\n", $.name); }
    enum_value { printf("[%s] = \"%s\",\n",$.name,$.name); }
    enum_end   { printf("};\n"); }

(Obviously, you'd want to redirect that into a different file, rather than putting it inline with the original file.)

## Things to keep in mind
* Enum values might be given. If not, the values increment from the last given value. (Or 0, if it's the first value.)
* Structs/Unions can have nested definitions, which will count as both definitions and members of the parent.
* Structs, enums, etc. can be declared within functions.
* Multi-dimensional arrays?
* Language to use for the action sections
  * C would be the most natural
  * It'll probably end up being Perl :)
    
[gvpr]: https://linux.die.net/man/1/gvpr
[dot]: https://www.graphviz.org/
[springy]: https://github.com/rcfox/SpringyJS-Layout-of-Dot-Graphs/blob/master/springy.gv
[clang]: https://github.com/loarabia/Clang-tutorial/wiki/TutorialOrig
