
# set base image
FROM node:20-alpine

# create a user with permissions to run the app
# -S creates a system user
# -G adds the user to a group
# This is a good practice for security.
# This is done to avoid running the app as root.
# If the app is compromised, the attacker will not have root access to the container.
# If instead, the app is run as root, any vulnerability in the app can be 
# exploited to gain root access to the host system.
RUN addgroup app && \
		adduser -S -G app app

# change to the new user
USER app
# So now the user will run the app, not root.

# set working directory
WORKDIR /app

# copy package.json and package-lock.json to the working directory.
# This is done to leverage Docker's caching mechanism.
# If package.json and package-lock.json do not change,
# Docker will use the cached layer and will not run npm install again.
COPY package*.json ./	

# sometimes the owner of the files copied is root.
# And thus, the app will not have permissions to read them.
# (eg Error: EACCES: permission denied)
# So we change the ownership of the files to the app user.
USER root

# change ownership of the working directory to the app user.
# chown -R app:app . means change ownership recursively
# to user app and group app for all files in the current directory.
# chown -R <user>:<group> <path>
RUN chown -R app:app .

# change back to the app user
USER app

# install dependencies
RUN npm install

# copy the rest of the application code to the working directory
COPY . .


# expose port 5173 to the host.
# This is the port that the app will run on.
# This is done to allow access to the app from outside the container.
# (eg if you run the container with -p 5173:5173)
EXPOSE 5173

# command to run the app
CMD npm run dev 