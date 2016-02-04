"""Shrinks images.

This was originally thumbnailify -- just specify the source to create a new
thumbnail image in the same dir as source.

You can also shrink images if they're "raw" and too large.  Note that this will
maintain aspect ratio and shrink the image until it reaches either the
specified width or height.  So, to set only the width, just specify a very
large height.

If you specify a directory, this will try to shrinkify or thumbnailify
everything in that location (except items with 'thumbnail' in the filename).

Usage:
  shrinkify <source> [--width=<width>] [--height=<height>] [--preserve]

Arguments:
  <source>  the source image or a directory of images

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

  # Process the source, checking to see if it's a directory.
  paths = []
  if os.path.isfile(arguments['<source>']):
    paths.append(arguments['<source>'])
  else:
    for filename in os.listdir(arguments['<source>']):
      # Check each file in the dir, skipping if it's another dir or already a
      # thumbnail.
      full_path = os.path.join(arguments['<source>'], filename)
      if not os.path.isfile(full_path):
        continue
      if 'thumbnail' in filename:
        continue
      paths.append(full_path)

  # Set the size.
  size = (int(arguments['--width']), int(arguments['--height']))

  # Shrink all these paths.
  for in_path in paths:
    in_dir, file_with_extension = os.path.split(in_path)
    filename, extension = file_with_extension.split('.')
    # Generate the output filepath.
    if arguments['--preserve']:
      outfile = '%s.%s' % (filename, extension)
    else:
      outfile = '%s-thumbnail.%s' % (filename, extension)
    out_path = os.path.join(in_dir, outfile)

    image = Image.open(in_path)
    image.thumbnail(size)
    if extension == 'jpg':
      extension = 'jpeg'
    image.save(out_path, extension)
    print 'saving "%s"' % out_path
