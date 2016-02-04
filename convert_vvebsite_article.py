"""Converts vvebsite articles into hugo-compatible articles.

"vvebsite" being my old blog, that is..

Usage:
  convert_vvebsite_article <in_path> <out_path>

Arguments:
  <in_path>  path to the vvebsite entry
  <out_path>  where to save the hugo-compatible entry
"""

import time

from docopt import docopt
import pytoml as toml
import yaml


if __name__ == '__main__':
  arguments = docopt(__doc__)

  # Process the input file.
  with open(arguments['<in_path>']) as in_file:
    file_data = in_file.read()
  frontmatter, article_contents = file_data.split('---')
  metadata = yaml.load(frontmatter)

  # Generate the output file.
  created_date = time.strptime(metadata['created'], '%B %d, %Y')
  formatted_date = time.strftime('%Y-%m-%d', created_date)
  output_metadata = {
    'date': '%sT13:00:00-08:00' % formatted_date,
    'location': '',
    'tags': metadata['tags'],
    'thumbnail': '',
    'title': metadata['title'],
  }

  # Make sure a 'drafts' tag is present so we can do some QC later.
  if 'drafts' not in output_metadata['tags']:
    output_metadata['tags'].append('drafts')

  # Build up the file.
  output_contents = ''.join((
    '+++\n',
    toml.dumps(output_metadata),
    '\n+++',
    article_contents))

  # Save the output.
  with open(arguments['<out_path>'], 'w') as out_file:
    out_file.write(output_contents)
