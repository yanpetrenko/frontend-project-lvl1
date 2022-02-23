#!/usr/bin/env node
/* eslint-disable linebreak-style */

import brainPrime from '../src/game-src/brain-prime-src.js';
import check from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
check(brainPrime, rules);
