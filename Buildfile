# ===========================================================================
# Project:   Tablet
# Copyright: ©2011 My Company, Inc.
# ===========================================================================

# This is your Buildfile, which sets build settings for your project.
# For example, this tells SproutCore's build tools that your requires
# the SproutCore framework.

# config :all, :required => :sproutcore
config :all, :required => [:sproutcore, :ki]

# In addition to this Buildfile, which gives settings for your entire project,
# each of your apps has its own Buildfile with settings specific to that app.


# CONFIGURE THEMES
 config :tablet, :theme => 'touchpad'
 config :touchpad,  :theme_name => 'touchpad'