
## Stack Life! 

stack Life is a project about todo management

### ScreenShot
<div>
<img src="https://user-images.githubusercontent.com/46335714/72749351-cc27b700-3b87-11ea-89db-a30c095ae707.PNG">
</div>

In the project directory, you can run:

### Backend
Make & Activate Virtual env:-
``` 
python -m venv venv
(Windows) venv\Scripts\activate
(Linux/Mac) source venv/bin/activate
```
Install Dependencies:-
```
cd backend
pip install -r requirements.txt
```
Make DB Migrations:-
```
python ./manage.py makemigrations
python ./manage.py migrate
```
Create admin:-
```
python manage.py createsuperuser
```
Start server for your REST-API:-
```
python ./manage.py runserver
```
### frontend

```
cd .. 
npm install
npm start
```
