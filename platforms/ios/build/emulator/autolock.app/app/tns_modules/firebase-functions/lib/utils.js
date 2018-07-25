"use strict";
// The MIT License (MIT)
//
// Copyright (c) 2017 Firebase
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
function normalizePath(path) {
    if (!path) {
        return '';
    }
    return path.replace(/^\//, '').replace(/\/$/, '');
}
exports.normalizePath = normalizePath;
function pathParts(path) {
    if (!path || path === '' || path === '/') {
        return [];
    }
    return normalizePath(path).split('/');
}
exports.pathParts = pathParts;
function joinPath(base, child) {
    return pathParts(base).concat(pathParts(child)).join('/');
}
exports.joinPath = joinPath;
function applyChange(src, dest) {
    // if not mergeable, don't merge
    if (!_.isPlainObject(dest) || !_.isPlainObject(src)) {
        return dest;
    }
    return pruneNulls(_.merge({}, src, dest));
}
exports.applyChange = applyChange;
function pruneNulls(obj) {
    for (let key in obj) {
        if (obj[key] === null) {
            delete obj[key];
        }
        else if (_.isPlainObject(obj[key])) {
            pruneNulls(obj[key]);
        }
    }
    return obj;
}
exports.pruneNulls = pruneNulls;
function valAt(source, path) {
    if (source === null) {
        return null;
    }
    else if (typeof source !== 'object') {
        return path ? null : source;
    }
    let parts = pathParts(path);
    if (!parts.length) {
        return source;
    }
    let cur = source;
    let leaf;
    while (parts.length) {
        let key = parts.shift();
        if (cur[key] === null || leaf) {
            return null;
        }
        else if (typeof cur[key] === 'object') {
            if (parts.length) {
                cur = cur[key];
            }
            else {
                return cur[key];
            }
        }
        else {
            leaf = cur[key];
        }
    }
    return leaf;
}
exports.valAt = valAt;
