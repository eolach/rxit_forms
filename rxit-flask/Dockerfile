FROM python:3.7.0

LABEL Server for rxit forms 

# Create the group and user for this container
# In useradd, the -m option creates a home directory,
# -g identifies the usergroup, and -s adds the 
#  shell command the user will use for accessing the 
RUN groupadd flaskgroup && useradd -m -g flaskgroup -s /bin/bash flask

# Create the working directory (and set it as the working directory)
RUN mkdir -p /home/flask/app/rxit-flask
WORKDIR /home/flask/app/rxit-flask

# Install the package dependencies
# This version uses pipenv
RUN pip install pipenv
RUN pipenv install

# Copy the source into the container
COPY . /home/flask/app/rxit-flask

RUN chown -R flask:flaskgroup /home/flask
USER flask