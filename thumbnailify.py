"""Creates thumbnails.

Usage:
  thumbnailify <source>

Arguments:
  <source>  the source image

Options:
  --verbose  print stuff
"""

import os

from docopt import docopt
from PIL import Image


size = (190, 144)


if __name__ == '__main__':
  arguments = docopt(__doc__)

  # Process the input filepath.
  path, file_with_extension = os.path.split(arguments['<source>'])
  filename, extension = file_with_extension.split('.')

  # Generate the output filepath.
  outfile = '%s-thumbnail.%s' % (filename, extension)
  outpath = os.path.join(path, outfile)

  # Make the thumbnail.
  image = Image.open(arguments['<source>'])
  image.thumbnail(size)

  # Save.
  if extension == 'jpg':
    extension = 'jpeg'
  image.save(outpath, extension)
  if '--verbose' in arguments:
    print 'saving "%s" ..' % outpath
