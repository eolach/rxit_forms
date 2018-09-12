FROM python:3.6.5

LABEL Server for rxit forms 

# Create the group and user for this container
# In useradd, the -m option creates a home directory,
# -g identifies the usergroup, and -s adds the 
#  shell command the user will use for accessing the 
# RUN groupadd flaskgroup && useradd -m -g flaskgroup -s /bin/bash flask

# Create the working directory (and set it as the working directory)
RUN mkdir -p /home/flask/app/backend
WORKDIR /home/flask/app/backend

# Install the package dependencies
# This version uses pipenv
RUN pip install pipenv
RUN pipenv install

# Copy the source into the container
COPY . /home/flask/app/backend

# RUN chown -R flask:flaskgroup /home/flask
# USER flask

EXPOSE 5000

CMD ["python", "run.py"]