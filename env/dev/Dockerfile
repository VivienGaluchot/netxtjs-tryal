FROM debian:11

# add dev tools
RUN apt-get update && \
    apt-get install git vim sudo bash-completion wget -y

# install NodeJs
RUN apt-get update && \
    apt-get install nodejs npm -y

# add dev user
RUN useradd -m dev && echo "dev:dev" | chpasswd && adduser dev sudo
USER dev
WORKDIR /home/dev

# prepare .ssh directory for github access
RUN mkdir -p /home/dev/.ssh
RUN chown -R dev:dev /home/dev/.ssh

# echo version
RUN node -v

ENTRYPOINT ["bash"]
