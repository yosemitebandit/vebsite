"""Shrinks images.

This was originally thumbnailify -- just specify the source to create a new
thumbnail image in the same dir as source.

You can also shrink images if they're "raw" and too large.  Note that this will
maintain aspect ratio and shrink the image until it reaches either the
specified width or height.  So, to set only the width, just specify a very
large height.

Usage:
  shrinkify <source> [--width=<width>] [--height=<height>] [--preserve]

Arguments:
  <source>  the source image

Options:
  --height=<height>  new height in pixels [default: 144]
  --width=<width>    new width in pixels [default: 190]
  --preserve         maintain the existing filename
"""

import os

from docopt import docopt
from PIL import Image


if __name__ == '__main__':
  arguments = docopt(__doc__)

  # Set the size.
  size = (int(arguments['--width']), int(arguments['--height']))

  # Process the input filepath.
  path, file_with_extension = os.path.split(arguments['<source>'])
  filename, extension = file_with_extension.split('.')

  # Generate the output filepath.
  if arguments['--preserve']:
    outfile = file_with_extension
  else:
    outfile = '%s-thumbnail.%s' % (filename, extension)
  outpath = os.path.join(path, outfile)

  # Make the thumbnail.
  image = Image.open(arguments['<source>'])
  image.thumbnail(size)

  # Save.
  if extension == 'jpg':
    extension = 'jpeg'
  image.save(outpath, extension)
  print 'saving "%s" ..' % outpath
