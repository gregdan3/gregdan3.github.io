---
title: Writing Code in LaTeX
author: gregdan3
date: 2020-02-20
description:
published: true
---

This needs an update. I use `pygments` these days, which is even better!

<!-- cut -->

For writing LaTeX docs, I use `listings` over `algorithmic` or any other
algorithm writing package for LaTeX. It's more convenient to handle syntax and
whitespace when writing another language in-line. The usual packages use their
own functions to handle whitespace, and everything else; writing another
language in-line will render exactly what you type.

# Algorithmic for LaTeX

I often see the algorithmic package recommended for demonstrating algorithms inside of LaTeX documents.

Like many LaTeX packages, this comes with its own [sizable set of docs](http://muug.ca/mirror/ctan/macros/latex/contrib/algorithms/algorithms.pdf) made up of a large quantity of commands which I might expect to exist already, but the exact syntax for which are anywhere between mildly frustrating and utterly arcane.

As a less-than-optimal idea of what this might look like in practice, here's a short (and possibly incorrect) algorithm I drafted which takes in a binary tree of integers and a sum, checking for a contiguous, non-backtracking path from any node to another (so only between parent and child nodes, no siblings) for which all the integers sum to the given value.

```latex
\begin{algorithm}
\begin{algorithmic}
    \Function{FindSumInTree}{Node, Sum}
    \If{Node is None} \Return{Sum $=$ 0}
    \Comment{Tree is empty}

    \Else{}
        Result $\gets$ False,
        TempSum $\gets$ Sum $-$ Node.Value

        \If{TempSum $=$ 0 \textbf{and} Node.Left is None \textbf{and} Node.Right is None} \Return{True}
            \Comment{Base case}
        \EndIf{}

        \If{Node.Left is not None}
        Result $\gets$ (Result \textbf{or} FindSumInTree(Node.Left, TempSum))
        \EndIf{}

        \If{Node.Right is not None}
        Result $\gets$ (Result \textbf{or} FindSumInTree(Node.Right, TempSum))
        \EndIf{}
    \Return{Result}
    \EndFunction{}
\end{algorithmic}
\end{algorithm}
```

As a side note, yes, it is necessary (or at least, it is necessary in my
environment) to `\begin{algorithm}`, then `\begin{algorithmic}`. I have no idea
why this is, and better yet, I often see algorithms written like this but
without the outer algorithm block

For reference, here's a rendering of the above example:
![rendered-find-sum-in-tree](/assets/simplify-LaTeX/algorithmic-rendered.png)

More to the point: frankly, I wrote only three algorithms in this fashion. It
is certainly convenient to include a dedicated comment syntax, so I can explain
my reasoning as I step through an algorithm.

And it is nice that I can include arbitrary syntax and terminology, as opposed to being locked exclusively into the provided syntax; as I recall, `algorithmicx` does this to a severe degree, and I abandoned using that package near immediately for this reason.

But my single biggest gripe with the process has to do with organization. Just about
every language has an expectation of how it should be organized in order to most
clearly convey the flow of the program. Some languages, like Python, make whitespace
an obligate component for designating how code behaves. At the least this is
important. But nearly all the packages I found for writing LaTeX algorithms would
outright refuse to observe my whitespace when rendering, and would instead force the
use of their own provided functions for organizing code.

I fought with these functions for one or two hours each time I wanted to write an
algorithm like this.

In all, the result algorithmic produces is not _that_ bad, and the writing process is similarly not _that_ bad. But I could
not stand having to continually reference the docs for this process to determine whether or not I was correctly using the
syntax. I'm not writing LaTeX to learn a new programming language, I'm writing it to type-set my documents and
assignments in a more convenient fashion.
Further, I couldn't continue to waste time on setting my functions so that they
appeared correctly on the page visually, even long after I had correctly written out
the algorithm. This may well have been the breaking point for me.

And so, shortly after dealing with this process for the third time, I decided to seek out a different solution for writing out algorithms in LaTeX. Preferably, I would like it to be as close to some existing language as possible, while still being excusably "pseudo-code." In this case, the gold standard would be to write Python in-line, since Python is regularly deemed "pseudo-code brought to life."

### The solution I found

Inside of the `texlive-science` collection of packages, there exists a package called `listings`. This package supports syntax highlighting for a large number of programming languages. Now, I can write the code I already wanted to write in a language I'm familiar with, without the extra cognitive load of converting from one syntax to another.

And here's what it looks like to use:

```latex
\begin{lstlisting}[language=Python]
def find_i_equals_elem(arr, low=0, high=len(arr)):
""" This is essentially binary search, but the search term is omitted.
Instead we use the "check" index, mid, as the search term. """
if high >= low:
mid = low + (high - low) // 2

        if arr[mid] == mid:
            return True  # there exists A[i] == i

        elif arr[mid] > mid:
            return find_i_equals_elem(arr, low, mid-1)  # check lower range

        else:
            return find_i_equals_elem(arr, mid+1, high)  # check upper range

    return False  # no A[i] == i

\end{lstlisting}
```

This is much more comfy. Now, I can still write algorithms in my LaTeX documents, but I can simply in-line Python code to do so. Here's the rendered result:

![python-in-latex](/assets/simplify-LaTeX/python-latex.png)

In this case, all Python keywords are automatically highlighted, which I can use to my advantage when writing out an algorithm, such as I've done here with if/elif/else.

Nothing prevents me from writing invalid Python code, so I can choose to write "true"
pseudo-code in this block, and lstlisting will still honor my code organization and
syntax. This is one of the big winners, because now I can use whitespace to organize
my code how I expect it to be organized, without my package choice or LaTeX itself
disagreeing with me on it!

Most importantly, I can cap this off at either end with `\begin{lstlisting}` and then `\end{lstlisting}` and no further work is required.

My only complaints are about the cleanliness of the render. It is likely possible to
change the used font, font spacing, and other details of the rendering process within
this block; I hadn't looked for a solution to this problem just yet. But, for how
simple it is to use, I'll gladly concede these flaws to continue using `listings`.
