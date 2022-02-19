#!/usr/bin/env node
/* eslint-disable linebreak-style */

import brainProgression from '../src/game-src/brain-progression-src.js';
import check from '../src/index.js';

const rules = 'What number is missing in the progression?';
check(brainProgression, rules);
