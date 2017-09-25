
#开始使用MATLAB
![xxx](https://github.com/atanx/atanx.github.io/raw/master/articles/matlab/20170925111324.jpg)
## 输出"Hello World"
命令行窗口（command window）是MATLAB的命令输入/执行窗口，用户可以在这里输入并立即执行命令，也可以在这里通过命令的形式运行用户自己编写的脚本。

如果要让Matlab打印出指定的文字，可以用`disp`函数，把希望打印的文字用单引号。
```matlab
>> disp('hello world')
hello world
```

## 我的第一个程序

下面，我们开始第一个程序编写。在命令行窗口，输入如下命令。
```matlab
>> edit myScript.m
```
上述命令将在编辑器窗口(editor window)打开myScript.m文件，如果该文件不存在，将会提示是否创建myScript.m，我们选择yes，创建文件。

在编辑器窗口输入如下内容：
```matlab
disp('hello world');
disp('hello matlab');
```
按`CTRL`+`S`进行保存。这样我们的第一个matlab程序就编写好了。

那么如何执行这个脚本呢？
只需要回到命令行窗口输入文件名`myScript`就能调用刚刚编写的脚本。非常方便！
```matlab
>> myScript
hello world
hello matlab
```
值得注意的是，我们上面的命令调用自己编写的脚本是不需要添加扩展名`.m`的，否则将会报错。
```matlab
>> myScript.m
Undefined variable "myScript" or function "myScript.m".
```
