#!/usr/bin/env node
import { greeting, evenGame } from "../src/even.js";

const userName = greeting();
evenGame(userName);
