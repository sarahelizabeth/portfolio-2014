# -*- coding: utf-8 -*-

"""
Tarbell project configuration
"""

# Short project name
NAME = "portfolio"

# Descriptive title of project
TITLE = "Sarah&#39;s Portfolio"

# Google spreadsheet key
SPREADSHEET_KEY = "0AtIgbhrbjJC_dDI4SklTa0VLZjRCWW5SMWdTNjY4NXc"

# Exclude these files from publication
EXCLUDES = ["*.md", "requirements.txt"]

# Create JSON data at ./data.json, disabled by default
# CREATE_JSON = True

# S3 bucket configuration
S3_BUCKETS = {
    'production': 'portfolio.sarahemurray.com',
    'staging': 'staging.sarahemurray.com',
}

# Default template variables
DEFAULT_CONTEXT = {
    'name': 'portfolio',
    'title': "Sarah's Portfolio"
}