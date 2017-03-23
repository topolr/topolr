![topolr](https://github.com/topolr/topolr/raw/master/logo.png)
---------------------------
[![Build Status](https://travis-ci.org/topolr/topolr.svg?branch=master)](https://travis-ci.org/topolr/topolr)
[![npm version](https://badge.fury.io/js/topolr.svg)](https://badge.fury.io/js/topolr)
[![npm](https://img.shields.io/npm/dt/topolr.svg?maxAge=2592000)](https://www.npmjs.com/package/topolr)
[![license](https://img.shields.io/github/license/topolr/topolr.svg?maxAge=2592000)](https://github.com/topolr/topolr/blob/master/LICENSE)

topolr web framework.

## Useage

### step 1 安装

```
 $ npm install topolr --save
```

### step 2 引入页面

```
<script src='[sitepath]/node_modules/topolr.js'>
//or
<script src='[sitepath]/node_modules/topolr.min.js'>
```

### step 3 更换路径

```
var topor=require("topolr");
topolr.copySourceTo(path);//source code
topolr.copyMiniTo(path);//uglify code
```

## Api

[see more](http://topolr.org)