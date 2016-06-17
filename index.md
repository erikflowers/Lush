---
layout: default-no-header
title: About Lush
home: true
---

Lush is an online [Service Blueprinting](http://www.ing-experience-design.com/service-blueprinting/) tool. In this version, it supports loading your service blueprints and viewing them as beautiful, friendly HTML.

### Why Lush?
Many teams have a need to make their Service Blueprints digital. This helps in sharing them with other stakeholders and maintaining them over a period of time. However, the tooling used for this digitization is far from optimal! Excel, Powerpoint or Omnigraffle templates are a great start, but are a hassle to keep up-to-date. Let alone working on them as a group!

On the other hand, we already have a great way to keep code up-to-date among a group of people. We use Git for this! So we thought, why not use the same technology for this design artifact? We decided to treat a service blueprint like code.

A service blueprint written as code, maintained as code makes digitization easy. It has other benefits too. Since the service blueprint code is separate from the view itself, one can create different views to visualize the blueprint. Also, searching through code is real easy (coz it's essentially text), and this welcomes an increased collaboration between teams.

Out of this desire, Lush was born. If you're curious about the name, Lush is called so due to the lush-y colors that make up a service blueprint. We hope you enjoy using Lush as much as we did building it.

### Using Lush
You can use Lush directly on this website, or download a copy (via NPM) and implement it in your own website, or fork it via Github and update according to your wishes.

To use Lush on this website, go to the "Online Lush" section and load your service blueprints. We've created several ways for loading your service blueprints.

1. From a Git repository using the option "Git Connect". Github and Gitlab are supported.
2. Copy+Paste your service blueprint markdown using the option "Toggle Markdown"
3. Load from the file system using the option "Load Markdown".

### Contribute to Lush
Lush is an open-source tool. You can find its source code [here](https://github.com/designing-experiences/Lush). We welcome your contributions via Pull Requests on this repository.

Lush uses Lush.js for the markdown handling. Lush.js too is an open-source library. You can find it [here](https://github.com/designing-experiences/Lush.js).

### Lush uses Markdown
Lush accepts service blueprints written in Markdown. It recognizes special elements and transforms these into the beautiful HTML view. For this, it creates a simple Markdown based language for writing service blueprints. The keywords of the language coincide with the elements in a service blueprint. Following are the language keywords:

* ``$ Service`` - Name of the service.
* ``$ Scenario`` - A plain words descriptor of what happens in the step.
* ``$ Step Definition`` - A plain words descriptor of what happens in the step.
* ``$ Channel`` - The channels involved in  the step.
* ``$ Actor`` - The journeyer, support actors  of the step.
* ``$ API, System`` - What makes this step “go”. APIs, Systems, Processes.
* ``$ Observation, Fact`` - Statements or facts that are  important to note.
* ``$ Policy, Rule`` - Rules or policies that dictate why things are a certain way.
* ``$ Metric`` - Data that helps measure &  learn about the step / scenario.
* ``$ Critical Moment`` - Sources of pain or experience breakdown.
* ``$ Question`` - Questions that need to be followed up on.
* ``$ Idea`` - Ah-ha realisations to improve the service experience.

### Styling Lush
If you use Lush on your own website you can easily style it according to your needs. To learn more about styling read the [Readme](https://github.com/designing-experiences/Lush.js) file on Github.