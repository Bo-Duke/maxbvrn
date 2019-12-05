#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double'
}

// Define color variables
const primary = chalk.keyword('hotpink')
const accent = chalk.keyword('deepskyblue')
const text = chalk.white
const muted = chalk.gray

// Url to help formatting urls
const url = (url, path = '', opt = '') => muted('https://') + (path ? text(url) : primary(url)) + muted('/' + opt) + primary(path)

// The actual data that can change
const data = {
  name: 'Maxime Bouveron',
  handle: 'maxbvrn',
  work: 'Front-End developer',
  company: 'Viareport',
  twitter: 'maxbvrn',
  github: 'bo-duke',
  linkedin: 'maxbvrn',
  web: 'bouveronmaxi.me',
  npx: 'maxbvrn'
}

// Chalk definitions
const chalked = {
  name: text.bold(data.name),
  separator: primary('/'),
  handle: text.bold(data.handle),
  work: text(data.work) + primary(' @ ') + text(data.company),
  twitter: url('twitter.com', data.twitter),
  github: url('github.com', data.github),
  linkedin: url('linkedin.com', data.linkedin, 'in/'),
  web: url(data.web),
  npx: primary('npx ') + text(data.npx),
  labelTwitter: text.bold('Twitter:'),
  labelGitHub: text.bold('GitHub:'),
  labelLinkedIn: text.bold('LinkedIn:'),
  labelWeb: text.bold('Web:'),
  labelCard: text.bold('Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `          ${chalked.name} ${chalked.separator} ${chalked.handle}`
const working = `       ${chalked.work}`
const twittering = `    ${chalked.labelTwitter}  ${chalked.twitter}`
const githubing = `     ${chalked.labelGitHub}  ${chalked.github}`
const linkedining = `   ${chalked.labelLinkedIn}  ${chalked.linkedin}`
const webing = `        ${chalked.labelWeb}  ${chalked.web}`
const carding = `       ${chalked.labelCard}  ${chalked.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading +
               newline + newline +
               working + newline + newline +
               githubing + newline +
               twittering + newline +
               linkedining + newline +
               webing + newline + newline +
               carding

console.log(accent(boxen(output, options)))
