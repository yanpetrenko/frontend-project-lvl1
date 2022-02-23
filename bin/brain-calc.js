#!/usr/bin/env node
/* eslint-disable linebreak-style */

import brainCalc from '../src/game-src/brain-calc-src.js';
import check from '../src/index.js';

const rules = 'What is the result of the expression?';
check(brainCalc, rules);
