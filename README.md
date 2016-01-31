# wake-on-voice-keyword
A building block for any voice activated system. This module uses CMU pocketsphinx's keyword recognition algorithms to wake up on a keyword. It serves as an example of what can be done using node.js and speech recognition applications.


Installation
============
Before proceeding with installation ensure that following external tools and dependencies are available on your system:

```
1. Node 5.2.0+
2. SWIG 3.0.7+
3. pkg-conf 0.29+
4. autoconf 2.69+
5. automake 1.15+
6. sphinxbase - latest installed from github (don't use any package manager for this, download the latest code and compile): https://github.com/cmusphinx/sphinxbase
7. pocketsphinx - latest installed from github (don't use any package manager for this, download the latest code and compile): https://github.com/cmusphinx/pocketsphinx
```

To test if pocketsphinx is working fine, test is some speech recognition is happening with the following command:
```
pocketsphinx_continuous -inmic yes
```

After the above is tested and validated, you can proceed to install the module using:

```
$ npm install https://github.com/ashishbajaj99/wake-on-voice-keyword
```

Building a simple language model
============
The project assumes your wakeup keyword set is small. To build the language model, we will use the Language Model webservice that is available from CMU here: http://www.speech.cs.cmu.edu/tools/lmtool-new.html

Create a corpus.txt file that contains all the keywords that you want the system to wake up using. Specify one keyword/keyword phrase per line, for example:

```
ASHIYA
ASHEEYA
AASHIYA
ARSIYA
ASHH SHIYA
AAA SHIYA
HEY AASHIYA
HELLO AASHIYA
```
Download the tarball created by the webservice and dump the files into the dictionary directory. Now you are all set to go!


Running
============
First you need to setup the 4 environment variables in a .env file. For example:

```
MODEL_DIR="/usr/local/share/pocketsphinx/model/en-us/en-us"
DICT_TO_USE="dictionary/5166.dic"
KEYPHRASE_FILE="keyphrase.txt"
POCKETSPHINX_LOG="pocketsphinx-logs.txt"
```
The code uses the package ```node-env-file``` to handle the loading of the environment variables.

```
node index.js    
```

License
==========
The MIT License (MIT)

Copyright (c) 2016 Ashish Bajaj bajaj.ashish@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
