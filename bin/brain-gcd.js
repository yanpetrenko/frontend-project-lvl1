#!/usr/bin/env node
/* eslint-disable linebreak-style */

import brainGcd from '../src/game-src/brain-gcd-src.js';
import check from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';
check(brainGcd, rules);
