FROM python:3.6

LABEL Server for rxit forms 

# Adapted from Kennedy adding creating usergroup and user
# -m specfies the user's home directory, -g the groups and -s  the login shell
RUN addgroup flaskgroup && useradd -m -g flaskgroup -s /bin/bash flask

# Create the working directory (and set it as the working directory)
# Creates parent directory if needed (-p)
RUN mkdir -p /home/backend
WORKDIR /home/backend

COPY requirements.txt requirements.txt
# This is the version Kennedy uses
RUN pip install --no-cache-dir -r requirements.txt

# Note a virtual environment may not be necessary for Docker
# RUN python -m venv venv
# RUN venv/bin/pip install -r requirements.txt

# Copy the code for the backend
COPY src src
COPY config.py config.py
COPY bootstrap.sh bootstrap.sh
# Add in the extras that allow the system to be refined within the docker container
COPY migrations migrations
COPY run.py run.py
COPY rxit.py rxit.py
RUN chmod +x bootstrap.sh

# ENV FLASK_APP run.py

RUN chown -R flask:flaskgroup /home/backend

USER flask

EXPOSE 5000
CMD ["./bootstrap.sh"]