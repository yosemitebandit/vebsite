"""fabfile

automates the deployment from git

usage:
    $ fab prod host_info
    $ fab prod deploy
"""
from fabric.api import env, run, local, sudo


def prod():
  """ the prod environment - the site hosted on kepler
  """
  env.use_ssh_config = True
  env.user = 'matt'
  env.hosts = ['kepler']
  env.project_dir = '/home/matt/yosemitebandit.com'
  env.branch = 'master'


def deploy():
  """ pushes changes
  """
  # push changes of specific branch
  local('git push origin %s' % env.branch)

  # update the remote with these changes
  run('cd %s; git pull origin %s' % (env.project_dir, env.branch))


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
