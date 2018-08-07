#!/bin/sh

set -e -u -x

echo "--------------------------------------------"
echo "RUNNING TEST TASK"
echo "--------------------------------------------"

# Set some variables
WORKING_DIR=$(pwd)
REPO_DIR=${WORKING_DIR}/${REPO_NAME}

cd ${REPO_DIR}

# Install Dependencies
npm install --no-audit --no-progress

# Run tests
npm test
