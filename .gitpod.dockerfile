FROM gitpod/workspace-mysql

USER gitpod

# Install Packages
RUN brew install node
RUN brew install redis

# Install Oh-My-Zsh
ENV ZSH_THEME cloud
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh
