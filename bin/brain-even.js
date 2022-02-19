#!/usr/bin/env node
/* eslint-disable linebreak-style */

import brainEven from '../src/game-src/brain-even-src.js';
import check from '../src/index.js';

const rules = 'What is the result of the expression?';
check(brainEven, rules);
