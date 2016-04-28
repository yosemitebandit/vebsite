+++
date = "2016-04-22T13:46:07-07:00"
location = "Mountain View"
tags = ["projects", "python"]
thumbnail = "/img/erbb2ip-expression-thumbnail.png"
title = "plotting gene expression data"

+++

I plotted some gene expression data from the NIH --
each plot is the expression of a gene measured with different probes
at different time points.

<!--more-->

![erbb2ip expression](/img/erbb2ip-expression.png)

You can see some probes don't find much activity during gestation,
while others see increasing or decreasing levels leading up to a mouse's birth.

![usp7 expression](/img/usp7-expression.png)

The code I used to make the plots
[is here](https://gist.github.com/yosemitebandit/12f7bb6542315f10f4467392eb6f603f):

```python
"""Plotting gene expression data from a csv"""
import os

import matplotlib
import matplotlib.pyplot as plt
import pylab


# Load data.
path = 'murine-placenta-gene-1-2.csv'
#path = 'human-placenta-gene-1-2.csv'
with open(path) as data_file:
  data = data_file.read()

# Strip header.
line_data, header_data = [], []
for index, line in enumerate(data.split('\r')):
  if index <= 2:
    header_data.append(line)
  if index > 2:
    line_data.append(line)

# Get the embryonic / trimester data (e8.5, e10.5, etc).
embryonic_data = header_data[1].split(',')
embryonic_numeric_data = []
if 'murine' in path:
  for d in embryonic_data:
    if not d:
      continue
    if d == 'P0':
      number = 20
    else:
      number = float(d.split('e')[1])
    embryonic_numeric_data.append(number)
else:
  for d in embryonic_data:
    if not d:
      continue
    if d == 'Pregnancy stage':
      continue
    if d == 'First trimester':
      number = 1
    elif d == 'Third trimester':
      number = 3
    embryonic_numeric_data.append(number)

# Group the probe data by gene -- keyed by gene, contents are an array of rows.
gene_data = {}
for line in line_data:
  tokens = line.split(',')
  if not tokens or not tokens[0]:
    continue
  gene = tokens[1]
  if gene not in gene_data:
    gene_data[gene] = []
  gene_data[gene].append(tokens)

# Find the greatest y value.
max_expression = 0
for gene in gene_data.keys():
  for tokens in gene_data[gene]:
    data = [float(v) for v in tokens[2:]]
    if max(data) > max_expression:
      max_expression = max(data)

# Make a plot for each gene.
if 'murine' in path:
  out_dir = 'mouse-plots'
else:
  out_dir = 'human-plots'

for gene in gene_data.keys():
  figure = plt.figure()
  for tokens in gene_data[gene]:
    probe = tokens[0]
    data = tokens[2:]
    plt.plot(embryonic_numeric_data, data, 'o', label=probe)
  plt.title(gene)
  axes = plt.gca()
  if 'murine' in path:
    axes.tick_params(axis='x', pad=15)
    plt.xticks(list(set(embryonic_numeric_data)))
    axes.set_xlim([8, 21])
    plt.xlabel('gestation day')
    plt.ylabel('genechip expression level')
  else:
    axes.set_xlim([0., 4])
    plt.xlabel('trimester')
    plt.ylabel('beadchip expression level')
  box = axes.get_position()
  axes.set_position([box.x0, box.y0, box.width * 0.75, box.height])
  axes.legend(loc='center left', bbox_to_anchor=(1, 0.5))
  axes.set_ylim([0., 1.1 * max_expression])
  matplotlib.rcParams.update({'font.size': 8})
  figure_path = os.path.join(out_dir, '%s.png' % gene)
  pylab.savefig(figure_path)
  plt.close(figure)
```

