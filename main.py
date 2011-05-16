#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
#import sys
#sys.path.append("./logic/")
from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
from google.appengine.ext.webapp import template
from logic import Participant

class RegisterHandler(webapp.RequestHandler):
	def post(self):
		android = self.request.get("technology_android")
		iphone = self.request.get("technology_iphone")
		blackberry = self.request.get("technology_blackberry")

		technologyList = list()
		for item in (android, iphone, blackberry):
			if item != "":
				technologyList.append(item)

		p = Participant(
			fullName = self.request.get("fullname"),
			email = self.request.get("email"),
			cell = self.request.get("cellphone"),
			experience = self.request.get("experience"),
			company = self.request.get("company"),
			technology = technologyList
		)

		p.put()
		self.response.out.write("registered for technology: %s" % technologyList)

class MainHandler(webapp.RequestHandler):
	def get(self):
		self.response.out.write(template.render('templates/index.html', {}))

def main():
	application = webapp.WSGIApplication(
		[
				('/register', RegisterHandler),
				('/', MainHandler)
		],
		debug=True)
	util.run_wsgi_app(application)


if __name__ == '__main__':
	main()
