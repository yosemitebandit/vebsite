"""Fixes permissions.

Non-recursively scans files in <dir> to ensure they have permissions of 0644.

Usage:
  fix_permissions <dir>

Arguments:
  <dir>  the input directory to be scanned
"""

import os
import stat

from docopt import docopt


TARGET_PERMISSIONS = '0644'
TARGET_PERMISSIONS_INT = 420  # '0o644' :/


# Parse args.
arguments = docopt(__doc__)
input_directory = os.path.expanduser(arguments['<dir>'])

# Fix permissions.
for filename in os.listdir(input_directory):
  full_path = os.path.join(input_directory, filename)
  if oct(stat.S_IMODE(os.stat(full_path).st_mode)) != TARGET_PERMISSIONS:
    print 'fixing "%s"' % full_path
    os.chmod(full_path, TARGET_PERMISSIONS_INT)
