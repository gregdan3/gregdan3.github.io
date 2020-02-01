---
layout: post
title: Simplifying algorithms written in LaTeX
date:   2020-02-01 12:27:45 -0600
categories: jekyll update
---
I often see the algorithmic package recommended for
demonstrating algorithms inside of LaTeX documents.

Like many LaTeX packages, this comes with its own [sizable set of docs](http://muug.ca/mirror/ctan/macros/latex/contrib/algorithms/algorithms.pdf) made up of a large quantity of commands which I might expect to exist already, but the exact syntax for which are generally between mildly frustrating and utterly arcane.

As a less-than-optimal idea of what this might look like in practice, here's a short (and possibly incorrect) algorithm I drafted which takes in a binary tree of integers and a sum, checking for a non-backtracking path from any node to another (so only between parent and child nodes, no siblings) for which all the integers sum to the given value.

{% highlight latex %}
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
{% endhighlight %}

Frankly, I wrote only three algorithms in this fashion.
It's certainly convenient to include a dedicated comment syntax, so I can explain my reasoning as I step through an algorithm.

And it's nice that I can include arbitrary syntax, as opposed to being locked exclusively into the provided syntax; as I recall, `algorithmicx` does this to a severe degree.

In all, the result is not *that* bad, but the writing process was absolutely terrible, and I didn't want to deal with it any longer.

For reference, here's a rendering of the above example:

![rendered-find-sum-in-tree](/images/simplify-LaTeX/algorithmic-rendered.png)

Not that bad, right?

But shortly after dealing with this process for the third time, I decided to seek out a different solution for writing these algorithms out. Preferably, I would like it to be as close to some existing language as possible, while still being excusably "pseudo-code".


Inside of the `texlive-science` collection of packages, there exists a package called `listings`. This package, simply put, supports syntax highlighting for a large number of programming languages. Excellent, I can just write the code I already wanted to write, without the extra cognitive load of converting from one syntax to another!

And here's what it looks like:


{% highlight latex %}
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
{% endhighlight %}

This is much more comfy. Now, I can still write algorithms in my LaTeX documents, but I can simply in-line Python code to do so. Here's the rendered equivalent:

![python-in-latex](/images/simplify-LaTeX/python-latex.png)

Maybe the syntax could be better, but keywords are automatically highlighted, and I can provide comments with the expected syntax.

More importantly, I can cap this off at either end with `\begin{lstlisting}` and then `\end{lstlisting}` and no further work is required.
