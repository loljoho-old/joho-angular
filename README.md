## TASKLIST

 - http://json-schema.org/
 - http://www.w3.org/

 https://www.edx.org/course/learn-html5-w3c-w3cx-html5-1x?utm_source=w3c&utm_medium=AdUnit&utm_content=CoursePage&utm_campaign=CoursePage

## Data Service

**Controller Function:**

```js
function setResume() {
  self.resume = dataService.get().$promise
    .then(function(response) {
      self.resume = response;
    }, function(errorMsg) {
      self.resume = errorMsg;
    });
  return self.resume;
}
```

**Templating:**

```html
<!-- Basics -->
<h1>
  {{ vm.resume.basics.name }}
  <small>
    {{ vm.resume.basics.title }}
  </small>
</h1>

<!-- Brand -->
<p ng-repeat="paragraph in vm.resume.basics.brand">{{ paragraph }}</p>

<!-- Profiles -->

```



## Testing

 - Selenium & WebDriver (?)
 - Jasmine

## Currently Learning

* Google Analytics
* OAuth
* Amazon Web Services

## Skills

```
Bootstrap
OOP
ORM/ODM
MVC Frameworks
WordPress
CMS
eCommerce
Adobe Creative Suite

```

```
Experienced Job Seekers

If you are focusing more on experience than education, list the basic facts regarding your degree, including institution name, location, degree, major and date. For example:

New Jersey College -- Newark, New Jersey
BS in Economics, Minor in Psychology, June 1992

Educational Credentials Lacking?

Some job seekers are concerned that their educations don't measure up to HR requirements. If you don't have a degree but have been participating in ongoing training, list your related courses, seminars, conferences and training in the Education section (create a list called "Professional Development"). Your training might be so impressive that the employer will overlook your lack of a formal degree. For example:  
Professional Development Highlights:
Product Launch in a Global Marketplace
Ecommerce Solutions
Selling the Dotcom Vision
Increasing Sales Through Relationship Selling
Professional Management Program
``