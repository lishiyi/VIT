# VIT  (Extends Nutrient-Calculator) <img src="https://github.com/lishiyi/VIT/blob/master/app/static/img/logo.png" width="50" height="50" /> 
*The Website for [VIT](http://www.vitmeals.com/).*

## Decription
* Based on [Nutrient-Calculator](https://github.com/lishiyi/Nutrient-Calculator), I creat a server and database for data
calculationg and saving.

* The framework is **Flask**, which uses **Python** as script language and *Jinja* to control HTML. Because 
[Nutrient-Calculator](https://github.com/lishiyi/Nutrient-Calculator) is in **JavaScript**, some calculation will be finished
at client while the the part of data processing is at the server by **Python**. Thus, I make a connection between them
by **jQuery**.

* Now, we can input our information, the website will calculate how much nutritions we need, and give a ingredients table 
for that, then save it into database.

## Setup
First install **Python 2.7**, and **pip**, then easily
```python
pip install flask
```
for Flask and modules of that. When finished installation, at the root:
```python
python run.py
```
The server will running on [127.0.0.1:5000](http://127.0.0.1:5000/)

## About [VIT](http://www.vitmeals.com/)

![image](http://static1.squarespace.com/static/55b679f0e4b0ce13f6ffee1b/55b68102e4b034a5976b98a8/55b68296e4b0cf84699c4a86/1438024345082/pitcher.png?format=50w) 
We each have unique nutritional needs making 2000 calorie diets generic and outdated. 
Meal prepping, counting calories, and knowing when to make changes are full-time jobs.
Take-out and processed food only make us unhealthier. 
VIT is here to make healthy living easy and keep food awesome.

## Original README

### [Nutrient-Calculator](https://github.com/lishiyi/Nutrient-Calculator) (From Genetic Soylent)

Create a recipe given a list of ingredients and a target nutrient profile for VIT.

* V0.4 Added sth for future Updates.
* V0.3 Now we have default value of Target. We can input just what we need, others will be there automaticaly.
* V0.2 Saved the information of ingredients in the JavaScipt flie, we do not need to input that again.
* V0.1 Trying to make the JSON file be local

### Genetic Soylent
Modifications to [nick's](https://github.com/nick) [genetic soylent](https://github.com/nick/genetic-soylent) program for [diy.soylent.me](http://diy.soylent.me).

*   Addition of all nutrients
*   Rounds ingredients to whole values
*   Allows for ranking of nutrients
*   Allows import of recipe JSON from [diy.soylent.me](http://diy.soylent.me)
*   Added UI for max/min nutrient values and priority. UI still needs improvement.

A demo of my latest test version is here: http://2potatoes.github.io/genetic-soylent/

Check out http://www.makesoylent.com/genetic-soylent for a demo.

For discussion see http://discourse.soylent.me/t/genetic-algorithms-automatic-diy-soylent
