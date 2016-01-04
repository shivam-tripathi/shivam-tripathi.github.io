---
layout: post
title: Python for Data Analysis
---

When I first used Python, I was swept off my feet immediately. "Hello, world!" in just one line! That was a bit too awesome for me. Over the years, I have realized why scripting languages like Python, Perl, Ruby etc. have become so popular to build applications. It is because it so simple to express one's idea using these languages - one rarely has to worry about syntax and implementation details.
The thing that sets Python apart from other languages and makes it one of the most suited language for data analysis is it's large and active scientific computing community. It has often been compared with other domain specific languages like R and MATLAB, but recent development in python's extended library support like pandas, scikit-learn etc. and it's strength in general purpose programming language has made it a better choice for data analysis.

**Two language problem**
Usually in data analysis field, research and implementations don't go hand in hand. Research is done using domain specific languages like R and MATLAB, and if successful these ideas are ported to later to production systems written in C, Java, C# etc.
Python, however, can be used both for prototype development as well as production systems too.

**Ease of integration with legacy code in C or FORTRAN**
Many production systems use code written in C or FORTRAN for handling linear algebra, optimization, fast fourier transformations etc. Python can be easily integrated with these libraries, using glue code (most of which doesn't run often, and has very small running time), and most of the effort is put to optimize the code, which maybe by moving the code to lower level language like C.
Development of Cython in recent years has made fast compiled python extensions and integrating with C/C++ code simpler.

**Drawbacks of using Python**
Being an interpreted language, python is very slow compared to compiled languages like C++, Java etc. Sometimes, the fact that developmental speed in python is more than other languages pays off this loss, sometimes when performance matters more, it doesn't.
Python is not ideal for concurrent, multi-threaded applications, particularly applications with many CPU bound threads, due to GIL (global interpreter locker), which prevents the interpreter from executing more than one python byte code instruction at a time. In many big data processing applications, a cluster of many computers may be used to process data in reasonable amount of time, and single python process fails in this concern.
However, Cython project features an easy integration with OpenMP (C framework for parallel computing to parallelize loops) to speed up numerical algorithms.


**Common Python libraries used in data analysis**
1. numpy
2. scipy
3. pandas
4. ipython
