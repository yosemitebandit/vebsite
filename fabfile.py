"""Buildin and deployin the ole site.

    $ fab oak build deploy
    $ fab oak host_info
"""

import os

from fabric.api import env, run, local, sudo, put, cd


def prod():
  """ the prod environment - the site hosted on kepler
  """
  env.use_ssh_config = True
  env.user = 'matt'
  env.hosts = ['kepler']
  env.project_dir = '/home/matt/yosemitebandit.com'
  env.branch = 'master'


def oak():
  """Oaken stuff."""
  env.use_ssh_config = True
  env.user = 'matt'
  env.hosts = ['kepler']
  env.project_dir = '/home/matt/oak.yosemitebandit.com'
  env.branch = 'hugo'
  env.out_path = 'public'


def build():
  """Builds the content with hugo."""
  local('hugo --theme=pasture')


def deploy():
  """Send static content to the remote."""
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
  """ commands nginx
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
  """ check host
  """
  print 'checking lsb_release of host: '
  run('lsb_release -a')


def uptime():
  """ get uptime
  """
  run('uptime')


def grep_python():
  """ check that the python apps are still kickin'
  """
  run('ps aux | grep python')
