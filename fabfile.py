'''fabfile
usage:
    $ fab prod host_info
    $ fab prod deploy
'''
import os

from fabric.api import env, run, local, sudo

def prod():
  env.use_ssh_config = True
  env.user = 'matt'
  env.hosts = ['kepler']
  env.project_dir = '/home/matt/yosemitebandit.com'
  env.branch = 'master'


def deploy():
  # push changes of specific branch
  local('git push origin %s' % env.branch)

  # update the remote with these changes
  run('cd %s; git pull origin %s' % (env.project_dir, env.branch))


def nginx(command):
  if command == 'start':
    sudo('/etc/init.d/nginx start')
  elif command == 'stop':
    sudo('/etc/init.d/nginx stop')
  elif command == 'restart':
    nginx('stop')
    nginx('start')
  else:
    print 'hm, did not quite understand that nginx command'


''' misc
'''
def host_info():
  print 'checking lsb_release of host: '
  run('lsb_release -a')

def uptime():
  run('uptime')

def grep_python():
  run('ps aux | grep python')
