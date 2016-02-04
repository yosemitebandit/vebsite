"""Building and deploying the site.

e.g.
    $ fab oak build deploy
    $ fab oak host_info
"""

import os

from fabric.api import env, run, local, sudo, put, cd


def yosemitebandit():
  """The yosemitebandit.com site hosted on kepler.
  """
  env.use_ssh_config = True
  env.user = 'matt'
  env.hosts = ['kepler']
  env.project_dir = '/home/matt/yosemitebandit.com'
  env.branch = 'master'


def oak():
  """The oakmachine.com domain on kepler.
  """
  env.use_ssh_config = True
  env.user = 'matt'
  env.hosts = ['kepler']
  env.project_dir = '/home/matt/oakmachine.com'
  env.branch = 'hugo'
  env.out_path = 'public'


def build():
  """Builds the content with hugo.
  """
  local('hugo --theme=pasture')


def deploy():
  """Send static content to the remote.
  """
  out_tgz = '%s.tgz' % env.out_path
  local('tar -czvf %s %s' % (out_tgz, env.out_path))
  remote_tgz = '/tmp/%s' % out_tgz
  put(out_tgz, remote_tgz)
  local('rm %s' % out_tgz)
  run('mv %s %s' % (remote_tgz, env.project_dir))
  with cd(env.project_dir):
    run('tar -xf %s' % os.path.join(env.project_dir, out_tgz))
    run('rm %s' % out_tgz)


def nginx(command):
  """Commands nginx.
  """
  if command == 'start':
    sudo('service nginx start')
  elif command == 'stop':
    sudo('service nginx stop')
  elif command == 'reload':
    # just reload nginx.conf or after changes to sites-available
    sudo('service nginx reload')
  elif command == 'restart':
    nginx('stop')
    nginx('start')
  else:
    print 'hm, did not quite understand that nginx command'


def host_info():
  """Gets lsb release data.
  """
  print 'checking lsb_release of host: '
  run('lsb_release -a')


def uptime():
  """Gets uptime.
  """
  run('uptime')


def grep_python():
  """Checks that python apps are still alive and kickin.
  """
  run('ps aux | grep python')
